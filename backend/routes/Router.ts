import express from "express"
import { Request, Response } from "express"

import {router} from "./UserRoutes"

router.use("/api/users", router)

router.get("/", (req: Request, res: Response) => {
    res.send("API is running...")
})

module.exports = router