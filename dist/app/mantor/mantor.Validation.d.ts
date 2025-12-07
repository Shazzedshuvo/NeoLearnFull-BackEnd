import { z } from "zod";
export declare const mentorValidationSchema: z.ZodObject<{
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
    profileImg: z.ZodString;
    designation: z.ZodString;
    departmentName: z.ZodString;
    specialized_area: z.ZodArray<z.ZodString>;
    education_qualification: z.ZodArray<z.ZodString>;
    workExperience: z.ZodArray<z.ZodString>;
    experienceYears: z.ZodString;
    experienceTrainedStudents: z.ZodString;
    reviews: z.ZodNumber;
    bio: z.ZodString;
    lifeJourney: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=mantor.Validation.d.ts.map