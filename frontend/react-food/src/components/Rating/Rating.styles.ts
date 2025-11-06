import styled from "styled-components";
import { RatingProps } from "@/types/ButtonType";

export const RatingContainer = styled.section<RatingProps>`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
    width: ${props => props.width ? props.width : "90px"};
    background-color: ${props => props.variant === "disabled" ? "var(--septenary-color)" : "var(--quaternary-color)"};
    color: ${props => props.variant === "disabled" ? "var(--quaternary-color)" : "var(--septenary-color)"};


    svg {
        color: var(--secondary-color);
        font-size: 1.4em;
    }

    h1 {
        font-size: 16px;
    }

    span {
        display: flex;
        justify-content: space-around;
        gap: 5px;
    }
`
