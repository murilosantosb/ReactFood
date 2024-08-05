import { error } from "console";
import { Restaurant } from "../models/Restaurants";
import { Category } from "../models/Category";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const createRestaurant = async (req: Request, res: Response) => {
    const { name, category, description, delivery_price, delivery_time } = req.body
    const image = req.file?.path

    const restaurant = await Restaurant.findOne({ name })

    if(restaurant) {
        res.status(422).json({ errors: ["Restaurante já existe."] })
    }

    const newRestaurant = await Restaurant.create({
        name,
        category,
        image,
        description,
        delivery_price,
        delivery_time,
        dishes: []
    })

    if(!newRestaurant) {
        res.status(422).json({ errors: ["Houve um erro, tente mais tarde!"] })
    }
    else {
    
        let categorys = await Category.findOne(category)
    
        if(!categorys) {
            categorys = await Category.create({ name: category, restaurants: [newRestaurant._id] })
        } else {
            categorys.restaurants.push(newRestaurant._id)
            categorys.save()
        }
    }

    res.status(201).json(newRestaurant)
}