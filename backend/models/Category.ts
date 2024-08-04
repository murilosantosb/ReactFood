import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
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
    
    restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],  
});

export const Category = mongoose.model("Category", categorySchema);

