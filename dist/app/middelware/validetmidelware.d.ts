import type { Request, Response, NextFunction } from "express";
import { type ZodSchema } from "zod";
export declare const validateMiddleware: (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validetmidelware.d.ts.map