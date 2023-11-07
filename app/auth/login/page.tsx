import LoginForm from "@/components/auth/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Login() {
  // try to retrieve the server session using the authOptions object
  // that contains the authorize(credentials) function that will
  // return the 'user' ('user' = {user: {firstName, email, password}})
  const session = await getServerSession(authOptions);

  // if the user session object exists, go to the dashboard
  // if not go to the login page
  if (session) redirect("/auth/dashboard");

  return (
    <div>
      <LoginForm />
    </div>
  );
}
