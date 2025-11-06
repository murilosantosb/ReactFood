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
}