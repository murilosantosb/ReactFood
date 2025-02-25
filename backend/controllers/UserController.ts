import { Request, Response } from "express";
import { User } from "../models/User";

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const jwtSecret = process.env.JWT_SECRET

const generateToken = (id: {}) => {
    if (!jwtSecret) {
        throw new Error("JWT secret is not defined.")
    }
    return jwt.sign({ id }, jwtSecret, { expiresIn: "7d" })
}

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const user = await User.findOne({email})

    if(user){
        res.status(422).json({errors: ["Por favor, utilize outro e-mail."]})
        return
    }

    const hash = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, hash)

    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    if(!newUser){
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]})
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })
}

export const login = async (req: Request, res: Response) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(!user) {
        res.status(401).json({errors: ["Usuário não encontrado."]})
        return
    }

    if(!(await bcrypt.compare(password, user.password))) {
        res.status(401).json({errors: ["Senha inválida."]})
        return
    }

    res.status(200).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    })
}

const getCurrentUser = async (req: Request, res: Response) => {
    
}