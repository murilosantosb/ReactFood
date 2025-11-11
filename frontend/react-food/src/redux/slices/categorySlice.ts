import { createSlice } from "@reduxjs/toolkit";

export interface Category {
    id: number;
    name: string;
    image_url: string;
}

interface CategoryState {
    categories: Category[];
    // loading: boolean;
    // error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    // loading: false,
    // error: null
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategories: (state, action) => {
            state.categories.push(action.payload)
        },
    }
})

