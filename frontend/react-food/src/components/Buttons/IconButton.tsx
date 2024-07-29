import React from 'react'

// components-styles
import { ButtonContainer } from '../ui/IconButton.styled'

// types
import { ButtonProps } from '../../types/IconButton'

const IconButton: React.FC<ButtonProps> = ({ children, variant }) => {
  return (
    <ButtonContainer variant={variant}>
      {children}
    </ButtonContainer>
  )
}

export default IconButton