import styled from "styled-components";

export const ScrollWrapper = styled.section`
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

export const HomeWrapper = styled.section`
    padding: 20px 0px;

    @media (min-width: 1200px) {
        padding: 40px 60px;
    }
`