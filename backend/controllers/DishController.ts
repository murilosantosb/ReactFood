import { Dish } from "../models/Dish";
import { Restaurant } from "../models/Restaurants";
import { Category } from "../models/Category";
import { Request, Response } from "express";

export const createDish = async (req: Request, res: Response) => {
    const { name, price, description, discount, category } = req.body;
    const image = req.file?.path;

    
    
    try {
        const dishCategory = await Category.findOne({ name: category })

        if(!dishCategory) {
            return res.status(404).json({ message: "Essa categoria não existe!" })
        }
        
        const restaurantIds = dishCategory.restaurants

        const restaurants = await Restaurant.find({ _id: { $in: restaurantIds } })

        if(restaurants.length === 0) {
            return res.status(404).json({ message: "Esse restaurante não existe!" })
        }

        const dish = await Dish.create({
            name,
            price,
            image,
            category,
            restaurant: restaurantIds,
            description,
            discount,
        })

        await Restaurant.updateMany({
            _id: { $in: restaurantIds }
        }, {
            $push: { dishes: dish._id }
        })

        res.status(201).json(dish)

    } catch (error: any) {
        res.status(500).json({ message: "Erro ao criar prato!" , error: error.message},)
    }

}