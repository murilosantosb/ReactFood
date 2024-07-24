import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Olá React-Food")
})


app.listen(5000, () => {
    console.log("API Rodando")
})