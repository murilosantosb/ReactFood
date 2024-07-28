import React from 'react'
//Styles
import { SidebarMenu } from "@/components/ui/Sidebar.styles"

// Components
import MenuButton from './MenuButton';

// Icons Sidebar
import { PiHouseLight } from "react-icons/pi";
import { BiSpreadsheet } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
import { PiHamburgerBold } from "react-icons/pi";
import { LuPizza } from "react-icons/lu";
import { FaFishFins } from "react-icons/fa6";
import { CiIceCream } from "react-icons/ci";
import { LuGrape } from "react-icons/lu";
import { PiPintGlassBold } from "react-icons/pi";

const GroupLinksSidebar : React.FC = () => {
  return (
    <SidebarMenu>
         <MenuButton variant='primary'>
              <PiHouseLight />
              <p>Ínicio</p>
            </MenuButton>

            <MenuButton variant='secondary'>
              <BiSpreadsheet />
              <p>Meus Pedidos</p>
            </MenuButton>

            <MenuButton variant='secondary'>
              <CiHeart />
              <p>Restaurantes Favoritos</p>
            </MenuButton>

            <div className='separator'/>

            <MenuButton variant='secondary'>
              <CiForkAndKnife />
              <p>Pratos</p>
            </MenuButton>  

            <MenuButton variant='secondary'>
              <PiHamburgerBold />
              <p>Lanches</p>
           </MenuButton>  

            <MenuButton variant='secondary'>
                <LuPizza />
                <p>Pizza</p>
            </MenuButton>

            <MenuButton variant='secondary'>
                <FaFishFins />
                <p>Japonesa</p>
            </MenuButton>    

            <MenuButton variant='secondary'>
                <CiIceCream />
                <p>Sobremesas</p>
            </MenuButton>    

            <MenuButton variant='secondary'>
                <LuGrape />
                <p>Sucos</p>
            </MenuButton>   

            <MenuButton variant='secondary'>
                <PiPintGlassBold />
                <p>Refrigerantes</p>
            </MenuButton>     
    </SidebarMenu>
  )
}

export default GroupLinksSidebar