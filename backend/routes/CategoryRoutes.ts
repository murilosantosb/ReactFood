import express from "express"
export const categoryRouter = express.Router()

// Controllers
import { createCategory } from "../controllers/CategoryController"

// Middleware
import { categoryValidation } from '../middlewares/categoryValidation'
import { validate } from "../middlewares/handleValidation"
import { upload } from "../middlewares/upload"

// Routes
categoryRouter.post("/create", upload.single("image") ,categoryValidation(), validate, createCategory)