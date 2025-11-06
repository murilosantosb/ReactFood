import React from 'react'
//Styles
import { StatusContainer } from './Status.styles'
//Types
import { StatusProps } from '@/types/ButtonType'


const Status: React.FC<StatusProps> = ({ status, title }) => {
  return (
    <StatusContainer status={status} title={title}>
        <p>{title}</p>
    </StatusContainer>
  )
}

export default Status