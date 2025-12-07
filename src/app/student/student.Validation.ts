import { z } from 'zod';

export const studentValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContact: z.string(),
  address: z.string(),
  guardian: z.string(),
  profileImg: z.string().optional(),
  courseName: z.string(),
});