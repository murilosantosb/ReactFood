"use client"
import React from 'react'
import styled from 'styled-components'

// Components
import IconButton from '../Buttons/IconButton'
// Icons
import { IoIosSearch } from "react-icons/io";
//Styles
import { SearchContainer } from './Search.styles';

const Search = () => {
  return (
    <SearchContainer>
      <input type="text" placeholder='Buscar Restaurantes'/>
      <div>
        <IconButton variant='primary'>
            <IoIosSearch />
        </IconButton>
      </div>
    </SearchContainer>
  )
}

export default Search