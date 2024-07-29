import React from 'react'

import { Button as ButtonStyle } from '../ui/Button.styles'

import { ButtonsProps } from '@/types/IconButton'

const Button: React.FC<ButtonsProps> = ({ variant, width, children }) => {
  return (
    <ButtonStyle variant={variant} width={width}>
        {children}
    </ButtonStyle>
  )
}

export default Button