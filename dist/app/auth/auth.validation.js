import { z } from 'zod';
export const loginValidationSchema = z.object({
    id: z.string().min(1, { message: 'User ID is required' }), // required string
    password: z
        .string()
        .min(4, { message: 'Password must be at least 4 characters' }), // min length
});
//# sourceMappingURL=auth.validation.js.map