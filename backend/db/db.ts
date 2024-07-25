import mongoose from "mongoose";
const dbUser = process.env.USER
const dbPassword = process.env.PASSWORD

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.7ayrjyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )

        console.log("Conectou ao banco!")

        return dbConn
    } catch (error: any) {
        console.log(error.message)
    }
}

conn()

module.exports = conn