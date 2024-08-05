import { Item } from '../models/Item'
import { Request, Response } from 'express'	
import mongoose from 'mongoose'

export const createItem = async (req: Request, res: Response) => {
    const { name, description, price, category } = req.body
    const image = req.file?.filename

    try {
        const newItem = await Item.create({
            name,
            description,
            price,
            image,
            category
        })
        res.status(201).json(newItem)

    } catch (error) {
       res.status(422).json({ errors: ["Erro ao criar o item."] })
    }
}