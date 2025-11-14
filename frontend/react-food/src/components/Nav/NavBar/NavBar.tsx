"use client"

import React, {useState} from 'react'
import Image from 'next/image'
// Styles & Icons
import { IoMenu } from "react-icons/io5";
import { NavBarContainer } from './NavBar.styles';
//Components
import Sidebar from "@/components/Nav/Sidebar";
import Search from '@/components/Search/Search';

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
            width={131}
            height={40}
        />
        <span className='navbar-search'>
          {/* <Search variant='primary'/> */}
        </span>
        <IoMenu onClick={toogleSidebar}/>
        <Sidebar isOpen={isOpen} toggleSidebar={toogleSidebar}/>
    </NavBarContainer>
  )
}

export default NavBar