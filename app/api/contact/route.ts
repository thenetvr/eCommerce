import Contact from "@/app/models/contact";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    await connectDB();

    await Contact.create({
      fullname,
      email,
      message,
    });
    console.log("test");

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (err) {
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
