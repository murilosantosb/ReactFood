import styled from "styled-components";


import { ModalProps } from '@/types/Modal'


const primaryModal = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 15px;

    span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;
    }
`

const secondaryModal = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 15px;
`

export const ModalContainer = styled.section<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) => (variant === "primary" ? primaryModal : secondaryModal)}
`

export const ModalContent = styled.div<ModalProps>`
  background-color: var(--octonary-color);
  padding: 25px;
  border-radius: 12px;
  width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: relative;
  z-index: 1000;
  width: 318px;

  h1 {
    color: var(--quaternary-color);
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }  

  p {
    color: var(--quinary-color);
    font-size: medium;
    margin-bottom: 15px;
  }
  ${({ variant }) => (variant === "primary" ? primaryModal : secondaryModal)}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}

`