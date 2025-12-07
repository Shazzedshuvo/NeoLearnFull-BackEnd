import { z } from "zod";
export declare const userValidationSchema: z.ZodObject<{
    id: z.ZodString;
    password: z.ZodString;
    isPasswordChanged: z.ZodOptional<z.ZodBoolean>;
    role: z.ZodEnum<{
        student: "student";
        mentor: "mentor";
        admin: "admin";
    }>;
    status: z.ZodOptional<z.ZodEnum<{
        active: "active";
        blocked: "blocked";
        pending: "pending";
    }>>;
    isDeleted: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UserInput = z.infer<typeof userValidationSchema>;
//# sourceMappingURL=user.validation.d.ts.map