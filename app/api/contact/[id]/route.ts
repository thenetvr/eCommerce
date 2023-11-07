import Contact from "@/app/models/contact";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    await connectDB();
    await Contact.deleteOne({ _id: params.id });

    return NextResponse.json({
      msg: `Deleted document where id = ${params.id}`,
    });
  } catch (err) {
    return NextResponse.json({ msg: "Unable deletedd." });
  }
}
