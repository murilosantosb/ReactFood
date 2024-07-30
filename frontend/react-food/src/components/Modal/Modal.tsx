import React from 'react'

// Interface
import { ModalProps } from '@/types/Modal'
// Styles
import { ModalContainer, ModalContent } from '../ui/Modal.styles'


const Modal: React.FC<ModalProps> = ({children, isOpen, toogleModal, variant, width, height}) => {


  return (
    <ModalContainer variant={variant} isOpen={isOpen} onClick={toogleModal}>
      <ModalContent width={width} variant={variant} height={height} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal