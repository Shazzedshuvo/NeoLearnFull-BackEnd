export interface IMentor {
  _id: string;
  id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  address: string;
  profileImg: string;
  designation: string;
  departmentName: string;
  specialized_area: string[];
  education_qualification: string[];
  workExperience: string[];
  experienceYears: string;
  experienceTrainedStudents: string;
  reviews: number;
  bio: string;
  lifeJourney: string;
  createdAt: Date;
  updatedAt: Date;
}