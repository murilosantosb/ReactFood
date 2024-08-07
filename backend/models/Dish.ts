import mongoose, { Schema } from "mongoose";

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: String,
    restaurant: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
    description: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
})

export const Dish = mongoose.model("Dish", dishSchema);