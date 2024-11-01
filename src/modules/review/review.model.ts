import mongoose, { Document, Schema } from "mongoose";
import { IReview } from "./review.interface";

const ReviewSchema: Schema = new Schema<IReview>({
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
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ReviewModel = mongoose.model<IReview & Document>("Review", ReviewSchema);

export default ReviewModel;
