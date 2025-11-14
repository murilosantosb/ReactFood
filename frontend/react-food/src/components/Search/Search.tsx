"use client"
import React from 'react'
import styled from 'styled-components'

// Components
import IconButton from '../Buttons/IconButton'
// Icons
import { IoIosSearch } from "react-icons/io";
//Styles
import { SearchComponent } from './Search.styles';

interface SearchProps {
  variant: "primary" | "secondary"
}

const Search: React.FC<SearchProps> = ({ variant }) => {
  return (
      <SearchComponent>
        <input type="text" placeholder='Buscar Restaurantes'/>
        <span>
          <IconButton variant={variant}>
            <IoIosSearch />
          </IconButton>
        </span>
      </SearchComponent>
  )
}

export default Search