import mongoose, { Schema } from "mongoose";

const restaurantSchema = new Schema({
    name:   
    {
        type: String,
        required: true,
    },
    image:
    {
        type: String,
        required: true,
    },
    description:
    {
        type: String,
        required: true,
    },
    delivery_price: {
        type: Number,
        required: true,
    },
    delivery_time: {
        type: Number,
        required: true,
    },
    dishes: [{ type: Schema.Types.ObjectId, ref: 'Dish'}],    
    category: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);