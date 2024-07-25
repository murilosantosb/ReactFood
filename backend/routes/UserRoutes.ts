import express from "express"
export const router = express.Router()

// Controller
import {register} from "../controllers/UserController"

// Middleware
import { userCreateValidation } from '../middlewares/userValidations'
import { validate } from "../middlewares/handleValidation"

// Routes
router.post("/register", userCreateValidation(), validate, register)
