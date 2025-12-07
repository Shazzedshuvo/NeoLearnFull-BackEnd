import type { IStudent } from "./student.intarfase.js";
export declare const StudentService: {
    createStudentServices: (payload: IStudent) => Promise<IStudent>;
    getAllStudentsServices: () => Promise<IStudent[]>;
    getSingleStudentServices: (id: string) => Promise<IStudent | null>;
    updateStudentServices: (id: string, payload: Partial<IStudent>) => Promise<IStudent | null>;
    deleteStudentServices: (id: string) => Promise<IStudent | null>;
};
//# sourceMappingURL=studnt.Sarvises.d.ts.map