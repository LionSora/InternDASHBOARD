import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "~/models/User";
import UserProvider from "~/models/UserProvider";
import connectDB from "~/utils/database";

export async function POST(req, res) {
  try {
    await connectDB();
    const { email, password, name } = await req.json();
    const exist_user = await UserProvider.findOne({ uid: email }).lean();
    if (exist_user) {
      return NextResponse.json(
        { message: "User Exists with given email address" },
        { status: 400 }
      );
    }
    const avatar = `https://ui-avatars.com/api/?background=random&name=${
      name || email
    }&format=jpg`;
    const user = await User.create({ avatar, name, email });
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await UserProvider.create({
      userId: user.id,
      uid: email,
      provider: "EMAIL",
      password: hash,
    });

    return NextResponse.json(user, {
      status: 201,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
