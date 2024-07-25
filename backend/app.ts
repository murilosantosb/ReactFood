require("dotenv").config()

import express from "express"
const cors = require("cors")

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use(cors({credentials: true, origin: ["http://localhost:3000/"]}))


// DB connection
require("./db/db")

// router
const router = require("./routes/Router")

app.use(router)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})