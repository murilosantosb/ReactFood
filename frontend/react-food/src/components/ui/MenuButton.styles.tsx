import styled from "styled-components";

import { MenuButtonProps } from "@/types/IconButton";

const primaryMenuButton = `
    background-color: var(--primary-color);
    color: white;
    border-radius: 25px;
    width: 310px;
    text-align: start;
    padding: 10px;
    font-weight: 700;
`

const secondaryMenuButton = `
    margin-left: 20px;
`

export const MenuButtonContainer = styled.section<MenuButtonProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: var(--quaternary-color);


    ${({ variant }) => (variant === "primary") && primaryMenuButton}
    ${({ variant }) => (variant === "secondary") && secondaryMenuButton}
`