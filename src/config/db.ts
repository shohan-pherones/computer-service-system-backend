import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error("MongoDB URI is not defined");
    }
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
