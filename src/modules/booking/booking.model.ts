import mongoose, { Document, Schema } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema: Schema = new Schema<IBooking>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["confirmed", "completed", "cancelled"],
    required: true,
    default: "confirmed",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BookingModel = mongoose.model<IBooking & Document>(
  "Booking",
  BookingSchema
);

export default BookingModel;
