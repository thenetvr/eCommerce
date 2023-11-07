import Contact from "@/app/models/contact";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const all = await Contact.find();
    return NextResponse.json(all);
  } catch (err) {
    return NextResponse.json({ msg: "Unable to send message." });
  }
}

export async function POST(req: Request) {
  const { fullname, email, message } = await req.json();

  try {
    // attempt to connect to MongoDB
    await connectDB();

    // after successful connection, attempt to create new item in model
    await Contact.create({
      fullname,
      email,
      message,
    });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (err) {
    // retrieve all error messages and send back to user to display
    if (err instanceof mongoose.Error.ValidationError) {
      let errorList = [];

      for (let e in err.errors) {
        errorList.push(err.errors[e].properties.message);
      }

      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: "Unable to send message." });
    }
  }
}
