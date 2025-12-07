import { z } from "zod";
export declare const loginValidationSchema: z.ZodObject<{
    id: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginInput = z.infer<typeof loginValidationSchema>;
//# sourceMappingURL=user.validation.d.ts.map