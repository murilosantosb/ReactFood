"use client"
import styled from "styled-components";
import type { BannerProps } from "@/types/BannerTypes";

export const BannerContainer = styled.section<BannerProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 25px;
    border-radius: 15px;
    height: 215px;
    
    width: ${props => props.width ? props.width : "582px"};
    background-color: ${props => props.banner === "primary" ? "var(--primary-color)" : "var(--secondary-color)"};

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    span {
        
    }

    p{
        font-weight: lighter;
        color: var(--senary-color);
    }

    strong {
        font-size: 2.3em;
        font-weight: bold;
        color: var(--octonary-color);
    }
`

export const Banners = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`