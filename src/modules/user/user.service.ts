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

export const loginUser = async (
  email: string,
  password: string
): Promise<Document | null> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return user;
};
