import { z } from 'zod';
export declare const studentValidationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    gender: z.ZodEnum<{
        male: "male";
        female: "female";
        other: "other";
    }>;
    dateOfBirth: z.ZodString;
    email: z.ZodString;
    contactNo: z.ZodString;
    emergencyContact: z.ZodString;
    address: z.ZodString;
    guardian: z.ZodString;
    profileImg: z.ZodOptional<z.ZodString>;
    courseName: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=student.Validation.d.ts.map