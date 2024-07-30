import React from 'react'

// components-styles
import { ButtonContainer } from '../ui/IconButton.styled'

// types
import { ButtonProps } from '../../types/IconButton'

const IconButton: React.FC<ButtonProps> = ({ children, variant, onClick }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default IconButton