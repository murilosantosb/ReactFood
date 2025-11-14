"use client"
import React from 'react';

import CategoryButton from './CategoryButton';
// Styles
import { ScrollWrapper } from '@/components/Wrappers/Wrapper.styles';
//Types
import { CategoryButtonProps } from '@/types/ButtonType';
import { apiRequestProps } from '@/types/apiType';
//API
import { useAxios } from "@/hooks/useAxios";

const Category = () => {

  const { data } = useAxios<CategoryButtonProps[]>({ endpoint: "/category", method: "get" })  

  return (
    <ScrollWrapper>
        {data && data.map((cat) => (
            <CategoryButton
                key={cat.id}
                id={cat.id}
                name={cat.name}
                image_url={cat.image_url}
            />
        ))}
    </ScrollWrapper>
  )
}

export default Category