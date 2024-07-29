import React from 'react'

// Interface
import { ModalProps } from '@/types/Modal'
// Styles
import { ModalContainer, ModalContent } from '../ui/Modal.styles'


const Modal: React.FC<ModalProps> = ({children, isOpen, toogleModal, variant, width, height}) => {


  return (
    <ModalContainer variant={variant} isOpen={isOpen} toogleModal={toogleModal}>
      <ModalContent width={width} variant={variant} height={height}>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal