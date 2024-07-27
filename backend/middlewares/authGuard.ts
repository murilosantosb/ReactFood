// import { User } from "../models/User";
// import jwt from "jsonwebtoken";
// const jwtSecret = process.env.JWT_SECRET || "defaultSecret";

// import { Request, Response, NextFunction } from "express";	

// export const authGuard = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     res.status(401).json({ errors: ["Token não encontrado."] });
//     return;
//   }

//   try {
//     const decoded = jwt.verify(token, jwtSecret);
//     const user = await User.findById(decoded.includes('id'));

//     if (!user) {
//       res.status(401).json({ errors: ["Usuário não encontrado."] });
//       return;
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ errors: ["Token inválido."] });
//   }
// };

