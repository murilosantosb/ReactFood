import styled from "styled-components";
import { CategoryButtonProps } from "@/types/ButtonType";

export const CategoryContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 40px 20px;
    column-gap: 20px;
    width: 100%;

    overflow-x: scroll; 
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch; 
    scroll-behavior: smooth;
    touch-action: pan-x;
    /* user-select: none;
    cursor: grab; */

    scrollbar-width: none;
    -ms-overflow-style: none; 

    &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
    }


    @media (min-width: 1080px) {
        justify-content: center;
    }
`

export const CategoryButtonContainer = styled.button<CategoryButtonProps>`
    display: flex;

    align-items: center;
    justify-content: space-around;
    background-color: var(--octonary-color);
    color: var(--quaternary-color);
    border-radius: 30px;
    border: none;
    box-shadow: 1px 1px 30px #00000036;

    scroll-snap-align: start;
    padding: 15px 30px;
    gap: 12px;

    font-weight: 500;

    &:hover {
        transform: translateY(-2px);
        transition: 0.5s;
    }
`