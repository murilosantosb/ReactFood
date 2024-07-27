import styled from "styled-components";

interface ButtonProps {
    variant: "primary"| "primary-round" | "secondary" | "secondary-round",
    children: React.ReactNode
}


const primaryStyle = `
    background-color: var(--primary-color);
    border-radius: 10px;
    color: white;
`

const primaryRoundStyle = `
    background-color: var(--primary-color);
    border-radius: 50%;
    color: white;
`

const secondaryStyle = `
    background-color: var(--septenary-color);
    border-radius: 10px;
`

const secondaryRoundStyle = `
    background-color: var(--septenary-color);
    border-radius: 50%;
`

export const ButtonContainer = styled.button<ButtonProps>`
    width: 55px;
    height: 55px;
    outline: none;
    border: none;
    cursor: pointer;

    svg {
        font-size: 2em;
    }

    ${({ variant }) => (variant === "primary") && primaryStyle}
    ${({ variant }) => (variant === "primary-round") && primaryRoundStyle}
    ${({ variant }) => (variant === "secondary") && secondaryStyle}
    ${({ variant }) => (variant === "secondary-round") && secondaryRoundStyle}
`