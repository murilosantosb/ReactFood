"use client"

import React from 'react'

// Icons and Buttons
import { GrClose } from "react-icons/gr";
import IconButton from '../Buttons/IconButton';
import { IoIosLogOut } from "react-icons/io";



// Styles
import { Overlay, SidebarContainer } from "@/components/ui/Sidebar.styles"

// Components
import GroupLinksSidebar from '../Nav/GroupLinksSidebar';
import { ModalProps } from '@/types/Modal';
import Modal from '../Modal/Modal';

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log("Login")
  }

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
              <IoIosLogOut onClick={handleLogin}/>
            </IconButton>
          </span>
          <Modal variant='primary'>d</Modal>
        </div>

        <GroupLinksSidebar />
      </SidebarContainer>
    </>
  )
}

export default Sidebar