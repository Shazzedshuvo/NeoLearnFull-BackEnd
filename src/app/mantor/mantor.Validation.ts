import { z } from "zod";

export const mentorValidationSchema = z.object({
  id: z.string().min(1, { message: "ID is required" }),
  name: z.string().min(1, { message: "Name is required" }),

  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),

  dateOfBirth: z.string().min(1, { message: "Date of Birth is required" }),

  email: z.string().email({ message: "Valid email is required" }),

  contactNo: z.string().min(1, { message: "Contact number is required" }),
  emergencyContact: z.string().min(1, { message: "Emergency contact is required" }),

  address: z.string().min(1, { message: "Address is required" }),

  profileImg: z.string().url({ message: "Valid image URL is required" }),

  designation: z.string().min(1, { message: "Designation is required" }),
  departmentName: z.string().min(1, { message: "Department name is required" }),

  specialized_area: z
    .array(z.string().min(1))
    .nonempty({ message: "At least one specialized area is required" }),

  education_qualification: z
    .array(z.string().min(1))
    .nonempty({ message: "At least one qualification is required" }),

  workExperience: z
    .array(z.string().min(1))
    .nonempty({ message: "At least one work experience is required" }),

  experienceYears: z.string().min(1, { message: "Experience years are required" }),

  experienceTrainedStudents: z
    .string()
    .min(1, { message: "Trained student experience is required" }),

  reviews: z.number().nonnegative({ message: "Reviews must be 0 or more" }),

  bio: z.string().min(1, { message: "Bio is required" }),
  lifeJourney: z.string().min(1, { message: "Life journey is required" }),
});
