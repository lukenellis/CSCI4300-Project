import mongoose, { Schema, Document, Model } from "mongoose";

const vacationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tripName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    destination: {
        type: String,   
        required: true,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
})

const Vacation = mongoose.models.Vacation || mongoose.model('Vacation', vacationSchema);
export default Vacation;