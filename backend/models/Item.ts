import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Sobremesa", "Refrigerante", "Suco"],
    },
})

export const Item = mongoose.model("Item", itemSchema);