import { NextResponse } from "next/server";

import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/users";

import bcrypt from "bcrypt";

import { IRegister } from "@/app/interface/register";

export async function POST(req: Request) {
  try {
    const body: IRegister = await req.json();

    const hashedPassword = await bcrypt.hash(body.password, 10);

    await connectMongoDB();
    await User.create({ ...body, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
