"use client"
import React from 'react'
import styled from 'styled-components'

// Components
import IconButton from './Buttons/IconButton'
// Icons
import { IoIosSearch } from "react-icons/io";

const SearchContainer = styled.form`
  background-color: var(--senary-color);
  padding: 18px;
  width: 350px;
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  position: relative;

  input {
    outline: none;
    background-color: transparent;
    border: none;
    width: 95%;
    font-size: 1.1em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 95%;
  }

  @media (min-width: 1200px) {
    width: 600px;

    
  }
`

type Props = {}

const Search: React.FC = (props: Props) => {
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