"use client"
import React from 'react'

// Icon
import { FaStar } from "react-icons/fa";
//Types
import { RatingProps } from '@/types/ButtonType';
//Styles
import { RatingContainer } from './Rating.styles';

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