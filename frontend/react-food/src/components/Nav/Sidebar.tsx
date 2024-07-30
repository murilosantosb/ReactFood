"use client"

import React, { useState } from 'react'

// Icons and Buttons
import { GrClose } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Styles
import { Overlay, SidebarContainer } from "@/components/ui/Sidebar.styles"

// Components
import GroupLinksSidebar from '../Nav/GroupLinksSidebar';
import Modal from '../Modal/Modal';
import Button from '../Buttons/Button';
import IconButton from '../Buttons/IconButton';

interface SidebarProps  {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const toogleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleOverlayClick = () => {
    if(isModalOpen) {
      toogleModal()
    }else if(isOpen) {
      toggleSidebar()
    }
  }

  return (
    <>
      <Overlay isOpen={isOpen || isModalOpen} onClick={handleOverlayClick} />
      <SidebarContainer isOpen={isOpen}>
        <div>
          <span>
            <h1>Menu</h1>
            <GrClose onClick={toggleSidebar} size={20}/>
          </span>
          <span>
            <h2>Olá. Faça seu login!</h2>
            <IconButton variant='primary' onClick={handleLoginClick}>
              <IoIosLogOut/>
            </IconButton>
          </span>
          
        </div>
        <GroupLinksSidebar />
      </SidebarContainer>
      {isModalOpen && (
        <>
          <Modal variant='primary' isOpen={isModalOpen} toogleModal={toogleModal}>
            <h1>Faça login na plataforma!</h1>
            <p>Conecte-se usando sua conta do Google ou Github</p>
            <span>
              <Button variant='tertiary'>
                <FaGithub size={18}/>
                Github
              </Button>
              <Button variant='tertiary'>
                <FaGoogle size={18}/>
                Google
              </Button>
            </span>
          </Modal>
        </>
      )}
    </>
  )
}

export default Sidebar