import React from 'react'

// Interfaces
import { MenuButtonProps } from '@/types/IconButton'
// Styles
import { MenuButtonContainer } from '../ui/MenuButton.styles'


const MenuButton: React.FC<MenuButtonProps> = ({ variant, children }) => {
  return (
    <MenuButtonContainer variant={variant}>
        {children}
    </MenuButtonContainer>
  )
}

export default MenuButton