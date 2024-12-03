import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { fullName, email, password } = await request.json();
        await connectMongoDB();

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        // Create new user
        const newUser = await User.create({ fullName, email, password });
        return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
    } catch (error) {
        console.error("Error during signup:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
