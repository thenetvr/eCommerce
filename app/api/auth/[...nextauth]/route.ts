import User from "@/app/models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/mongodb";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs";

export const authOptions = {
  // add necessary providers
  providers: [
    // add credentials provider with options
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // declare 'authorize' function that will activate once API endpoint is hit
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          // find a user with specified email, return nothing if not found
          await connectDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }

          // check if hashed passwords match
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }

          // replace built-in credential provider user.name property to be returned with user.fullname from DB
          user.name = user?.fullname || "";

          // if authentication is good, return found user
          return user;
        } catch (err) {
          console.log("Error: ", err);
        }
      },
    }),
  ],

  // declare JWT sessions and secret
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  // provide specific page for the login
  pages: { signIn: "/" },
};

// create an Auth handler using NextAuth() with auth Options
const handler = NextAuth(authOptions);

// export the handler as GET and POST
export { handler as GET, handler as POST };
