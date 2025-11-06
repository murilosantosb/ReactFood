"use client"

import React, {useState} from 'react'
import Image from 'next/image'
// Styles & Icons
import { IoMenu } from "react-icons/io5";
import { NavBarContainer } from './NavBar.styles';
//Components
import Sidebar from "@/components/Nav/Sidebar";

const NavBar: React.FC = () => {
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