import React from 'react'
import styled from 'styled-components'

// Icon
import { MdFavorite } from "react-icons/md";

interface FavoriteProps {
    category: "favorite" | "notFavorite";
    width?: string;
}

const FavoriteContainer = styled.section<FavoriteProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    width: ${props => props.width ? props.width : "60px"};
    background-color: ${props => props.category === "favorite" ? "var(--senary-color)" : "var(--quaternary-color)"};
    svg {
        font-size: 2rem;
        color: ${props => props.category === "favorite" ? "var(--primary-color)" : "var(--octonary-color)"};
    }
`

const Favorite: React.FC<FavoriteProps> = ({ category }) => {
  return (
    <FavoriteContainer category={category}>
        <MdFavorite />
    </FavoriteContainer>
  )
}

export default Favorite