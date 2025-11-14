"use client"
import styled from "styled-components";
import type { FavoriteProps } from "@/types/ButtonType";

export const FavoriteContainer = styled.section<FavoriteProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    width: ${props => props.width ? props.width : "60px"};
    background-color: ${props => props.category === "favorite" ? "var(--senary-color)" : "var(--quaternary-color)"};
    svg {
        font-size: 2rem;
        color: ${props => props.category === "favorite" ? "var(--primary-color)" : "var(--octonary-color)"};
    }
`