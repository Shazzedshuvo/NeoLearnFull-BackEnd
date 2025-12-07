import type { NextFunction, Request, Response } from "express";
export declare const checkRole: (...allowedRoles: string[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=chakRole.d.ts.map