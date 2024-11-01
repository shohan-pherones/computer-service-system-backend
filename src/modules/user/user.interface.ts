import { ObjectId } from "mongoose";

export interface IUser {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  role: "client" | "provider" | "admin";
  name: string;
  image: string;
  address: string;
  createdAt?: Date;
}
