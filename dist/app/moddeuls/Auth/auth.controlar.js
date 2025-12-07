/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/modules/auth/auth.controller.ts
import { AuthService } from './auth.sarvises.js';
export const loginController = async (req, res) => {
    try {
        const result = await AuthService.loginUser(req.body);
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: result,
        });
    }
    catch (error) {
        res.status(401).json({
            success: false,
            message: error.message || 'Login failed',
        });
    }
};
//# sourceMappingURL=auth.controlar.js.map