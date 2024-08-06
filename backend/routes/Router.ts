import express from "express"
import { Request, Response } from "express"

// Routes
import {userRouter} from "./UserRoutes"
import {categoryRouter} from "./CategoryRoutes"
import {restaurantRouter} from "./RestaurantRoutes"
import {itemRouter} from "./ItemRoutes"

const router = express.Router()

router.use("/api/users", userRouter)
router.use("/api/categories", categoryRouter)
router.use("/api/restaurants", restaurantRouter)
router.use("/api/items", itemRouter)

router.get("/", (req: Request, res: Response) => {
    res.send("API is running...")
})

module.exports = router