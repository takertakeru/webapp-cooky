import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

import { pipeline } from "stream";
import { promisify } from "util";

import { connectMongoDB } from "@/app/lib/mongodb";
import Users from "@/app/models/users";

import Recipe from "@/app/models/recipe";
import { createWriteStream } from "fs";

const pump = promisify(pipeline);

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check for Session
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find email exist
    const user = await Users.findOne({ email: session.user?.email });

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url) as any;
    const id = searchParams.get("id");
    if (id) {
      const recipes = await Recipe.findOne({ _id: id });
      return NextResponse.json({ data: [recipes] });
    }
    const others = searchParams.get("others");
    if (others) {
      const recipes = await Recipe.find({ user_id: { $ne: user._id } });
      return NextResponse.json({ data: recipes });
    }
    const recipes = await Recipe.find({ user_id: user._id });

    return NextResponse.json({ data: recipes });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check for Session
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find email exist
    const user = await Users.findOne({ email: session.user?.email });

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const name = formData.get("name");
    const numberOfServing = formData.get("numberOfServing");
    const preparationTime = formData.get("preparationTime");
    const image = formData.get("image");
    const ingredients = formData.get("ingredients");
    const procedure = formData.get("procedure");

    const response = await Recipe.create({
      name,
      numberOfServing,
      preparationTime,
      ingredients,
      procedure,
      user_id: user._id,
    });

    if (image)
      pump(
        (image as any).stream(),
        createWriteStream(`public/recipe-images/${response._id}.jpg`)
      );

    return NextResponse.json({ data: response });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check for Session
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find email exist
    const user = await Users.findOne({ email: session.user?.email });

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const _id = formData.get("_id");
    const name = formData.get("name");
    const numberOfServing = formData.get("numberOfServing");
    const preparationTime = formData.get("preparationTime");
    const image = formData.get("image");
    const ingredients = formData.get("ingredients");
    const procedure = formData.get("procedure");

    const response = await Recipe.findOneAndUpdate(
      { _id },
      {
        name,
        numberOfServing,
        preparationTime,
        ingredients,
        procedure,
        user_id: user._id,
      }
    );

    return NextResponse.json({ data: response });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    // Check for Session
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find email exist
    const user = await Users.findOne({ email: session.user?.email });

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url) as any;
    console.log({ searchParams });
    const recipe_id = searchParams.get("recipe_id");
    if (!recipe_id) {
      return NextResponse.json(
        { message: "Invalid Recipe ID" },
        { status: 400 }
      );
    }
    const response = await Recipe.findByIdAndDelete({
      _id: recipe_id,
    });

    return NextResponse.json({ data: response });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
