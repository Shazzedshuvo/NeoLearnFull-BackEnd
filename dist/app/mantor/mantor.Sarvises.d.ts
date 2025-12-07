import type { IMentor } from "./mantor.intarfase.js";
export declare const MentorService: {
    createMentorServices: (payload: IMentor) => Promise<IMentor>;
    getAllMentorsServices: () => Promise<IMentor[]>;
    getSingleMentorServices: (id: string) => Promise<IMentor | null>;
    updateMentorServices: (id: string, payload: Partial<IMentor>) => Promise<IMentor | null>;
    deleteMentorServices: (id: string) => Promise<IMentor | null>;
};
//# sourceMappingURL=mantor.Sarvises.d.ts.map