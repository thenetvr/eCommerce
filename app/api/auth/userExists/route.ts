import User from "@/app/models/user";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req:any) {
  try {
    // retrieve email from user request body
    const { email } = await req.json();

    // connect to db & search for an existing user with user request's email
    await connectDB();
    const user = await User.findOne({ email }).select("_id");

    // if user exists, returns object of user
    // if not, returns null
    return NextResponse.json({ user });
  } catch (err) {
    console.log(err);
  }
}
