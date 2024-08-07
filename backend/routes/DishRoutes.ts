import express from 'express'
export const dishRouter = express.Router()


// Controllers
import { createDish } from '../controllers/DishController'

// Middlewares
import { upload } from '../middlewares/upload'

// Routes
dishRouter.post("/create", upload.single("image"), createDish)
