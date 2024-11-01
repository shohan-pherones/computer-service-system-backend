import { Request, Response } from "express";
import { MongoError } from "mongodb";
import { registerUser } from "./user.service";

export const register = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, email, password, name, image, address } = req.body;

    if (!username || !email || !password || !name || !image || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newUser = await registerUser({
      username,
      email,
      password,
      name,
      image,
      address,
      role: "client",
    });

    return res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    const mongoError = error as MongoError;

    if (mongoError.code === 11000) {
      return res
        .status(409)
        .json({ message: "Username or email already exists." });
    }

    return res
      .status(500)
      .json({ message: "Server error.", error: (error as Error).message });
  }
};
