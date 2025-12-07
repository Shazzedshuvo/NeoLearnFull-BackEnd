import { Mentor } from "./mantor.Model.js";
const createMentorServices = async (payload) => {
    return await Mentor.create(payload);
};
const getAllMentorsServices = async () => {
    return await Mentor.find();
};
const getSingleMentorServices = async (id) => {
    return await Mentor.findOne({ id });
};
const updateMentorServices = async (id, payload) => {
    return await Mentor.findOneAndUpdate({ id }, payload, { new: true });
};
const deleteMentorServices = async (id) => {
    return await Mentor.findOneAndDelete({ id });
};
export const MentorService = {
    createMentorServices,
    getAllMentorsServices,
    getSingleMentorServices,
    updateMentorServices,
    deleteMentorServices,
};
//# sourceMappingURL=mantor.Sarvises.js.map