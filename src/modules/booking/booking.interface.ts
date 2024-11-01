import { ObjectId } from "mongoose";

export interface IBooking {
  _id: ObjectId;
  user: ObjectId;
  service: ObjectId;
  date: Date;
  status: "confirmed" | "completed" | "cancelled";
  createdAt: Date;
}
