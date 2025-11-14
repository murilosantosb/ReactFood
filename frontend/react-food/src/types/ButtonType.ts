import React from "react";

export interface FavoriteProps {
    category: "favorite" | "notFavorite";
    width?: string;
}

export interface RatingProps {
    variant: "disabled" | "activated";
    width?: string;
}

export interface StatusProps {
    title: string;
    status: "process" | "finished" | "discount";
    width?: string;
    icon?: boolean;
}

export interface CategoryButtonProps {
    id: number;
    name: string;
    image_url: string;
}