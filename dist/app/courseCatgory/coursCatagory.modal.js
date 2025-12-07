import { Schema, model } from 'mongoose';
const categorySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
}, {
    timestamps: true,
});
export const Category = model('Category', categorySchema);
//# sourceMappingURL=coursCatagory.modal.js.map