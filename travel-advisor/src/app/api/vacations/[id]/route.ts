import connectMongoDB from "@/libs/mongodb";
import Vacation from '@/models/Vacation';
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

interface RouteParams {
    params: { id: string };
}

export async function GET(request:NextRequest, { params }:RouteParams) {
    const { id } = params;
    await connectMongoDB();
    const vacation = await Vacation.findOne({ _id: id });
    return NextResponse.json({ vacation }, { status: 200 });
}

export async function PUT(request:NextRequest, { params }:RouteParams) {
    const { id } = params;
    const { user: user, tripName: tripName, image: image, startDate: startDate, endDate: endDate, destination: destination } = await request.json();
    await connectMongoDB();
    await Vacation.findByIdAndUpdate(id, { user, tripName, image, startDate, endDate, destination });
    return NextResponse.json({ message: "Vacation updated" }, { status: 200 });
}

export async function DELETE(request:NextRequest, { params }:RouteParams) {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "invalid ID format" }, {status: 400});
    }

    await connectMongoDB();
    const deletedVacation = await Vacation.findByIdAndDelete(id);

    if (!deletedVacation) {
        return NextResponse.json({ message: "Vacation not found" }, {status: 404});
    }

    return NextResponse.json({ message: "Vacation deleted" }, { status: 200 });
}