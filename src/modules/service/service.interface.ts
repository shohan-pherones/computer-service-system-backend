import { ObjectId } from "mongoose";

export interface IService {
  _id: ObjectId;
  name: string;
  description: string;
  price: number;
  provider: ObjectId;
  image: string;
  createdAt: Date;
}
