"use client"

import React from 'react'

// Icons and Buttons
import { GrClose } from "react-icons/gr";
import IconButton from './IconButton';
import { IoIosLogOut } from "react-icons/io";



// Styles
import { Overlay, SidebarContainer, SidebarMenu } from "@/components/ui/Sidebar.styles"

// Components
import GroupLinksSidebar from './GroupLinksSidebar';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      <SidebarContainer isOpen={isOpen}>
        <div>
          <span>
            <h1>Menu</h1>
            <GrClose onClick={toggleSidebar} size={20}/>
          </span>
          <span>
            <h2>Olá. Faça seu login!</h2>
            <IconButton variant='primary'>
              <IoIosLogOut />
            </IconButton>
          </span>
        </div>

        <GroupLinksSidebar />
      </SidebarContainer>
    </>
  )
}

export default Sidebar