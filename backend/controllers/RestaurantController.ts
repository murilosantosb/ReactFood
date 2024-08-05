import { error } from "console";
import { Restaurant } from "../models/Restaurants";
import { Category } from "../models/Category";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const createRestaurant = async (req: Request, res: Response) => {
    const { name, category, description, delivery_price, delivery_time } = req.body
    const image = req.file?.path

    const deliveryPrice = delivery_price === "Grátis" ? 0 : parseFloat(delivery_price);
    const deliveryTime = parseInt(delivery_time);

    const categoryDocument = await Category.findOne({ name: category })

    const category_id = categoryDocument ? categoryDocument._id : null

    if(!category_id) {
        res.status(422).json({ errors: ["Categoria não encontrada."] })
    }

    const restaurant = await Restaurant.findOne({ name })

    if(restaurant) {
        res.status(422).json({ errors: ["Restaurante já existe."] })
    }

    const newRestaurant = await Restaurant.create({
        name,
        category: [category_id],
        image,
        description,
        delivery_price: deliveryPrice,
        delivery_time: deliveryTime,
        dishes: []
    })

    if(!newRestaurant) {
        res.status(422).json({ errors: ["Houve um erro, tente mais tarde!"] })
    }
    else {
        await Category.updateOne(
            { _id: category_id },
            { $push: { restaurants: newRestaurant._id } }
        )
    }

    res.status(201).json(newRestaurant)
}