import { Item } from '../models/Item'
import { Request, Response } from 'express'	
import { Category } from "../models/Category"

export const createItem = async (req: Request, res: Response) => {
    const { name, price, category } = req.body
    const image = req.file?.filename

    const categories = await Category.findOne({ name: category })
    const category_id = categories ? categories._id : null

    try {
        if(!category_id) {
            res.status(422).json({ errors: ["Categoria não encontrada."] })
        }

        const item = await Item.findOne({ name })

        if(item) {
            res.status(422).json({ errors: ["Item já cadastrado."] })
        }

        const newItem = await Item.create({
            name,
            price,
            image,
            category: [category_id]
        })

        if(!newItem) {
            res.status(422).json({ errors: ["Erro ao criar o item."] })
            return
        }

        await Category.updateOne(
            { _id: category_id },
            { $push: { restaurants: newItem._id } }
        )

        res.status(201).json(newItem)

    } catch (error) {
       res.status(422).json({ errors: ["Erro ao criar o item."] })
    }
}

export const getItemName = async (req: Request, res: Response) => {
    const { name } = req.params

    
    try {
        const itemName = new RegExp(name, "i")

        const item = await Item.findOne({ name: itemName })

        if(!item) {
            return res.status(404).json({ errors: ["Esse item não existe."] })
        }

        res.status(200).json({ data: item })
        
    } catch (error) {
        res.status(404).json({ errors: ["Esse item não existe."] })
    }
}