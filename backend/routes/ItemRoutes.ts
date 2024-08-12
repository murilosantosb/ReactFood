import express from 'express'
export const itemRouter = express.Router()

// Cotrollers
import { createItem, getItemName } from '../controllers/ItemController'

// Middleware
import { upload } from '../middlewares/upload'


// Routes
itemRouter.post("/create", upload.single("image") , createItem)
itemRouter.get("/:name", getItemName)