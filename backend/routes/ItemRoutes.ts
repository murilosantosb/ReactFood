import express from 'express'
export const itemRouter = express.Router()

// Cotrollers
import { createItem } from '../controllers/ItemController'

// Middleware
import { validate } from '../middlewares/handleValidation'
import { upload } from '../middlewares/upload'

// Routes
itemRouter.post("/create", upload.single("image"), validate, createItem)