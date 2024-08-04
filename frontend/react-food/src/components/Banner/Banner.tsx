"use client"
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface BannerProps {
    banner: "primary" | "secondary";
    p1: string;
    p2: string;
    strong: string;
    img: string;
    width?: string;
}


const BannerContainer = styled.section<BannerProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 25px;
    border-radius: 15px;
    
    width: ${props => props.width ? props.width : "400px"};
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


const Banner: React.FC<BannerProps> = ({ banner ,img, strong, width, p1, p2 }) => {
  return (
    <BannerContainer banner={banner} width={width} p1={p1} p2={p2} strong={strong} img={img}>
        <div>
            <span>
                <p>
                    {p1} <strong>{strong}</strong> {p2}
                </p>
            </span>
            <Image src={img} alt={p1} width={230} height={127} />
        </div>
    </BannerContainer>
  )
}

export default Banner