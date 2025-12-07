import { z } from "zod";
export const authValidationSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" }),
    email: z
        .string()
        .email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
    phone: z
        .string()
        .min(6, { message: "Phone number is required" }),
    role: z
        .enum(["creator", "admin", "visitor"])
        .default("visitor"), // optional হলে default দিতে পারো
});
//# sourceMappingURL=auth.model.js.map