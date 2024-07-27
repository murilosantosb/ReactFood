"use client"

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import Sidebar from './Sidebar';

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    /* position: relative; */
    height: 100%;

    svg {
        font-size: 2em;
    }

    @media (min-width: 1200px) {
        padding: 30px 128px;
    }
`


type Props = {}

const NavBar: React.FC = (props: Props) => {
  return (
    <NavBarContainer>
        <Image
            src="/Logo.png"
            alt='Logo'
            width={130.93}
            height={40}
        />
        <IoMenu />
        <Sidebar/>
    </NavBarContainer>
  )
}

export default NavBar