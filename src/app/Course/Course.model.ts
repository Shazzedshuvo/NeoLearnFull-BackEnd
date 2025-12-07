    import { Schema, model} from 'mongoose';
    import type { ICourse } from './Cpurse.Intarfase.js';


    const courseSchema = new Schema<ICourse>({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, required: true },

    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },

    type: { type: String, required: true },
    image: { type: String, required: true },
    fee: { type: String, required: true },
    rating: { type: Number, required: true },
    totalRating: { type: Number, required: true },
    totalStudentsEnroll: { type: Number, required: true },

    mentor: { type: Schema.Types.ObjectId, ref: 'Mentor', required: true },

    technology: { type: String, required: true },
    courseStart: { type: String, required: true },
    durationMonth: { type: Number, required: true },
    lectures: { type: Number, required: true },
    totalExam: { type: Number, required: true },
    totalProject: { type: Number, required: true },
    details: { type: String, required: true },
    courseOverview: { type: String, required: true },
    curriculum: [{ type: String, required: true }],
    courseIncludes: [
        {
        icon: { type: String, required: true },
        text: { type: String, required: true },
        },
    ],
    softwareYoullLearn: [{ type: String, required: true }],
    jobPositions: [{ type: String, required: true }],
    }, { timestamps: true });

    export const Course = model<ICourse>('Course', courseSchema);