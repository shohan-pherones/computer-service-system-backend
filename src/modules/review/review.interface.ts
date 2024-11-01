import { ObjectId } from "mongoose";

export interface IReview {
  _id: ObjectId;
  user: ObjectId;
  service: ObjectId;
  rating: number;
  comment: string;
  createdAt: Date;
}
