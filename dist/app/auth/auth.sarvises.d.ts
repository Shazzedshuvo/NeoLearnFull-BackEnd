export declare const AuthService: {
    loginUser: (payload: {
        id: string;
        password: string;
    }) => Promise<{
        token: string;
        user: {
            id: any;
            role: "student" | "mentor" | "admin";
            status: "active" | "blocked" | "pending";
        };
    }>;
};
//# sourceMappingURL=auth.sarvises.d.ts.map