// /* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';

// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ success: false, message: 'Unauthorized access' });
//   }

//   const token = authHeader.split(' ')[1];
//   const secret = process.env.JWT_SECRET;

//   if (!secret) {
//     return res.status(500).json({ success: false, message: 'JWT secret is not defined' } );
//   }

//   try {
//     const decoded = jwt.verify(token, secret) ;
//     (req as any).user = decoded; // বা proper type extend করতে পারো
//     next();
//   } catch (err) {
//     return res.status(403).json({ success: false, message: 'Invalid token' });
//   }
// };
