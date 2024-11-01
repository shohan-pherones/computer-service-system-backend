import { z } from "zod";

export const userRegistrationSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string().min(1, "Name is required"),
  image: z.string().url("Image must be a valid URL"),
  address: z.string().min(1, "Address is required"),
});
