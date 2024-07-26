import express from "express"
import { Request, Response } from "express"

import {userRouter} from "./UserRoutes"

const router = express.Router()

router.use("/api/users", userRouter)

router.get("/", (req: Request, res: Response) => {
    res.send("API is running...")
})

module.exports = router