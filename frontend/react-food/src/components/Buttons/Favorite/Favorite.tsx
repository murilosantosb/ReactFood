import React from 'react'
import type { FavoriteProps } from '@/types/ButtonType';

// Icon
import { MdFavorite } from "react-icons/md";

// Styles
import { FavoriteContainer } from './Favorite.styles';



const Favorite: React.FC<FavoriteProps> = ({ category }) => {
  return (
    <FavoriteContainer category={category}>
        <MdFavorite />
    </FavoriteContainer>
  )
}

export default Favorite