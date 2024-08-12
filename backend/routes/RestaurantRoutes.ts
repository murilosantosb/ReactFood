import express from "express"
export const restaurantRouter = express.Router()

// Controllers

// Middleware
import { validate } from "../middlewares/handleValidation"
import { upload } from "../middlewares/upload"
import { restaurantValidation } from "../middlewares/categoryValidation"
import { createRestaurant, getRestaurantsName } from "../controllers/RestaurantController"

// Routes
restaurantRouter.post("/create", upload.single("image"), restaurantValidation(), validate, createRestaurant)
restaurantRouter.get("/:name", getRestaurantsName)