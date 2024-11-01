import bcrypt from "bcrypt";
import { Document } from "mongoose";
import { IUser } from "./user.interface";
import UserModel from "./user.model";

export const registerUser = async (
  userData: Omit<IUser, "_id">
): Promise<Document> => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = new UserModel({
    ...userData,
    password: hashedPassword,
  });

  return await newUser.save();
};
