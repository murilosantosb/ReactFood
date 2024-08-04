import { Category } from "../models/Category";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const createCategory = async (req: Request, res: Response) => {
    const { name } = req.body
    const image = req.file?.path

    const category = await Category.findOne({ name })

    if(category) {
        res.status(422).json({ errors: ["Categoria já existe."] })
    }

    const newCategory = await Category.create({
        name,
        image,
        restaurants: []
    })

    if(!newCategory) {
        res.status(422).json({ errors: ["Houve um erro, tente mais tarde!"] })
    }

    res.status(201).json(newCategory)
}