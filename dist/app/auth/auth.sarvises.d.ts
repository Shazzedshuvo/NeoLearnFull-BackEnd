interface LoginPayload {
    email: string;
    password: string;
}
interface LoginResponse {
    token: string;
    user: {
        id: string;
        role: string;
        status?: string;
    };
}
export declare const AuthService: {
    loginUser: (payload: LoginPayload) => Promise<LoginResponse>;
};
export {};
//# sourceMappingURL=auth.sarvises.d.ts.map