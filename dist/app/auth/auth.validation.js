import { z } from 'zod';
export const loginValidationSchema = z.object({
    email: z.string().email({ message: 'Valid email is required' }),
    password: z
        .string()
        .min(4, { message: 'Password must be at least 4 characters' }),
});
//# sourceMappingURL=auth.validation.js.map