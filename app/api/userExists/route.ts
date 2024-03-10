import { NextResponse } from "next/server";

import { connectMongoDB } from "@/app/lib/mongodb";
import Users from "@/app/models/users";

import { IEmailRequest } from "@/app/interface/email";

export async function POST(req: Request) {
  try {
    await connectMongoDB();

    const { email }: IEmailRequest = await req.json();

    const user = await Users.findOne({ email }).select("_id");

    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
