import React from "react";

export interface ButtonProps {
    variant: "primary"| "primary-round" | "secondary" | "secondary-round",
    children: React.ReactNode
}

export interface MenuButtonProps {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}