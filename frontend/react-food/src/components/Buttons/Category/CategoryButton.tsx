"use client";

import React from 'react'
import Image from 'next/image'
// Types
import { CategoryButtonProps } from '@/types/ButtonType'
// Styles
import { CategoryButtonContainer } from './Category.styles'

const CategoryButton: React.FC<CategoryButtonProps> = ({id, image_url, name}) => {
  return (
    <CategoryButtonContainer id={id} name={name} image_url={image_url}>
        <Image 
            src={image_url}
            alt={name}
            width={36}
            height={36}
        />
        <strong>{name}</strong>
    </CategoryButtonContainer>
  )
}

export default CategoryButton