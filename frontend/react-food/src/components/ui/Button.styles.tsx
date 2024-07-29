import styled from "styled-components";

import { ButtonsProps } from "@/types/IconButton";

const primaryButton = `
    background-color: var(--primary-color);
    color: white;
`

const secondaryButton = `
    background-color: var(--senary-color);
    color: var(--quaternary-color);
`

const tertiaryButton = `
    background-color: var(--octonary-color);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    span {
        display: flex;
        align-items: start;
        justify-content: space-between;
    }

`

export const Button = styled.button<ButtonsProps>`
    padding: 15px 20px;
    border-radius: 12px;
    text-align: center;
    border: none;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;

    ${({ variant }) => (variant === "primary" ? primaryButton : variant === "secondary" ? secondaryButton : tertiaryButton)}
    ${({ width }) => (width) ? `width: ${width};` : "width: 133px"}
`

