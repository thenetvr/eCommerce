import User from "@/app/models/user";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // destructure fields
    const { fullname, email, password } = await req.json();

    // hash the password for encryption
    const hashedPassword = await bcrypt.hash(password, 10);

    // connect to DB and attempt to create new user
    await connectDB();
    await User.create({ fullname, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
