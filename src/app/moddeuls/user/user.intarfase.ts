export interface IUser {
  _id: string;
  id: string;
  password: string;
  isPasswordChanged: boolean;
  role: 'student' | 'mentor' | 'admin';
  status: 'active' | 'blocked' | 'pending';
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}