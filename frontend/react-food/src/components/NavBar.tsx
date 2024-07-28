"use client"

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import Sidebar from './Sidebar';
import { useState } from 'react';

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
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
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toogleSidebar = () => {
        setIsOpen(open => !open)
    }

  return (
    <NavBarContainer>
        <Image
            src="/Group.png"
            alt='Logo'
            width={120}
            height={35}
        />
        <IoMenu onClick={toogleSidebar}/>
        <Sidebar isOpen={isOpen} toggleSidebar={toogleSidebar}/>
    </NavBarContainer>
  )
}

export default NavBar