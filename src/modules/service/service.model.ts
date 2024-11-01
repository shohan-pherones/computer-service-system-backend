import mongoose, { Document, Schema } from "mongoose";
import { IService } from "./service.interface";

const ServiceSchema: Schema = new Schema<IService>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ServiceModel = mongoose.model<IService & Document>(
  "Service",
  ServiceSchema
);

export default ServiceModel;
