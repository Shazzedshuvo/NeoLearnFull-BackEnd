// src/app/modules/user/user.validation.ts
import { z } from "zod";

// Zod schema for User
export const userValidationSchema = z.object({
  id: z
    .string()
    .min(1, { message: "User ID is required" }), // must be non-empty
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(20, { message: "Password cannot exceed 20 characters" }),
  isPasswordChanged: z.boolean().optional(), // optional field
  role: z.enum(["student", "mentor", "admin"]), // required
  status: z.enum(["active", "blocked", "pending"]).optional(), // optional, default: pending
  isDeleted: z.boolean().optional(), // optional, default: false
});

// TypeScript type inference
export type UserInput = z.infer<typeof userValidationSchema>;
