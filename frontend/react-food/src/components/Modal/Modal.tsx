import React from 'react'
import styled from 'styled-components'

interface ModalProps {
    isOpen: boolean;
    toogleModal: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal