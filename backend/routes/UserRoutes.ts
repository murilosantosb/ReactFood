import express from "express"
export const userRouter = express.Router()

// Controller
import {register, login} from "../controllers/UserController"

// Middleware
import { userCreateValidation, userLoginValidation } from '../middlewares/userValidations'
import { validate } from "../middlewares/handleValidation"

// Routes
userRouter.post("/register", userCreateValidation(), validate, register)
userRouter.post("/login", userLoginValidation(), validate, login)
