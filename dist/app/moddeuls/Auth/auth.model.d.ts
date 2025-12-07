import { z } from "zod";
export declare const authValidationSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phone: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        admin: "admin";
        creator: "creator";
        visitor: "visitor";
    }>>;
}, z.core.$strip>;
export type AuthValidationType = z.infer<typeof authValidationSchema>;
//# sourceMappingURL=auth.model.d.ts.map