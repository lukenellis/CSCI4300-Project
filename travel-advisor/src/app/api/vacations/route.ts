import connectMongoDB from "@/libs/mongodb";
import Vacation from '@/models/Vacation';
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { user, tripName, image, startDate, endDate, destination } = await request.json();
    await connectMongoDB();
  
    // Create a new vacation with the user's ID
    const newVacation = await Vacation.create({
      user,
      tripName,
      image,
      startDate,
      endDate,
      destination,
    });
  
    return NextResponse.json({ message: "Vacation added successfully", vacation: newVacation }, { status: 201 });
  }

export async function GET() {
    await connectMongoDB();
    const vacations = await Vacation.find();
    return NextResponse.json({ vacations });
}