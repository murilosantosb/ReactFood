import React from 'react'
import styled from 'styled-components'

interface StatusProps {
    title: string;
    status: "process" | "finished";
    width?: string;
}

const StatusContainer = styled.section<StatusProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 30px;
    font-weight: bold;

    width: ${props => props.width ? props.width : "135px"};
    background-color: ${props => props.status === "process" ? "var(--tertiary-color)" : "var(--septenary-color)"};
    color: ${props => props.status === "process" ? "var(--octonary-color)" : "var(--quinary-color)"};
`

const Status: React.FC<StatusProps> = ({ status, title }) => {
  return (
    <StatusContainer status={status} title={title}>
        <p>{title}</p>
    </StatusContainer>
  )
}

export default Status