import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    name: {
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
    category: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
})

export const Item = mongoose.model("Item", itemSchema);