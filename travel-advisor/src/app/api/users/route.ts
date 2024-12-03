import connectMongoDB from "@/libs/mongodb";
import User from '@/models/User';
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { email, password, vacations } = await request.json();
    await connectMongoDB();
    await User.create({ email, password, vacations });
    return NextResponse.json({ message: "User added successfully"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}