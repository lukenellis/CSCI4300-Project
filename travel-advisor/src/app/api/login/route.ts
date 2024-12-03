import connectMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        await connectMongoDB();

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        // Verify password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
            expiresIn: "1h",
        });

        return NextResponse.json({ message: "Login successful", token }, { status: 200 });
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
