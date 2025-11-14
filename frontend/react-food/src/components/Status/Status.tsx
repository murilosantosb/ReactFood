import React from 'react'
//Styles
import { StatusContainer } from './Status.styles'
//Types
import { StatusProps } from '@/types/ButtonType'
//Icons
import { FaLongArrowAltDown } from "react-icons/fa";

const Status: React.FC<StatusProps> = ({ status, title, icon }) => {
  return (
    <StatusContainer status={status} title={title}>
        {icon && <FaLongArrowAltDown size={17}/>}
        <p>{title}</p>
    </StatusContainer>
  )
}

export default Status