"use client"
import React from 'react'

// Icon
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

interface RatingProps {
    variant: "disabled" | "activated";
    width?: string;
}

const RatingContainer = styled.section<RatingProps>`
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

const Rating: React.FC<RatingProps> = ({ variant }) => {
  return (
    <RatingContainer variant={variant}>
        <span>
            <FaStar />
            <h1>5.0</h1>
        </span>
    </RatingContainer>
  )
}

export default Rating