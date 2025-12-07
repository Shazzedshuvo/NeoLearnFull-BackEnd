import type { IMentor } from "./mantor.intarfase.js";
import { Mentor } from "./mantor.Model.js";



const createMentorServices = async (payload: IMentor): Promise<IMentor> => {
  return await Mentor.create(payload);
};


const getAllMentorsServices = async (): Promise<IMentor[]> => {
  return await Mentor.find();
};


const getSingleMentorServices = async (id: string): Promise<IMentor | null> => {
  return await Mentor.findOne({ id });
};


const updateMentorServices = async (
  id: string,
  payload: Partial<IMentor>
): Promise<IMentor | null> => {
  return await Mentor.findOneAndUpdate({ id }, payload, { new: true });
};


const deleteMentorServices = async (id: string): Promise<IMentor | null> => {
  return await Mentor.findOneAndDelete({ id });
};

export const MentorService = {
  createMentorServices,
  getAllMentorsServices,
  getSingleMentorServices,
  updateMentorServices,
  deleteMentorServices,
};