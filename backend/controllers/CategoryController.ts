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


export const getCategoriesName = async (req: Request, res: Response) => {
    const { name } = req.params

    const categoryName = new RegExp(name, "i")

    const category = await Category.findOne({ name: categoryName })

    if(!category) {
        res.status(404).json({ errors: ["Essa categoria não existe."] })
    }

    res.status(200).json({ data: category })
}