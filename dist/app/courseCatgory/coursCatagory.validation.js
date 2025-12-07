import { z } from 'zod';
// Category Validation Schema
export const categoryValidationSchema = z.object({
    // ID: অবশ্যই number
    id: z.number(),
    // Name: string & not empty
    name: z.string().min(1, { message: "Name is required" }),
    // Slug: string & not empty
    slug: z.string().min(1, { message: "Slug is required" }),
    // Icon: string & not empty
    icon: z.string().min(1, { message: "Icon is required" }),
});
//# sourceMappingURL=coursCatagory.validation.js.map