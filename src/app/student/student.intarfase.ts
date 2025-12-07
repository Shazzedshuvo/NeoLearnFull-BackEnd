export interface IStudent {
  _id: string;
  id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  address: string;
  guardian: string;
  profileImg: string;
  courseName: string;
  createdAt: Date;
  updatedAt: Date;
}