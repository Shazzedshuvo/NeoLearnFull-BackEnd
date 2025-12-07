import { z } from "zod";
// User Validation Schema
export const userValidationSchema = z.object({
    id: z
        .string()
        .min(1, { message: "User ID is required" }),
    password: z
        .string()
        .min(4, { message: "Password must be at least 4 characters" })
        .max(20, { message: "Password cannot exceed 20 characters" }),
    isPasswordChanged: z
        .boolean()
        .optional(),
    role: z.enum(['student', 'mentor', 'admin']), // required by default
    status: z.enum(['active', 'blocked', 'pending']).optional(),
    isDeleted: z.boolean().optional(),
});
//# sourceMappingURL=user.validation.js.map