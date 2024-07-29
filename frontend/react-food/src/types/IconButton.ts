import React from "react";

export interface ButtonProps {
    variant: "primary"| "primary-round" | "secondary" | "secondary-round",
    children: React.ReactNode
}

export interface MenuButtonProps {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}
export interface ButtonsProps {
    variant: "primary" | "secondary" | "tertiary";
    width?: string;
    children: React.ReactNode;
}