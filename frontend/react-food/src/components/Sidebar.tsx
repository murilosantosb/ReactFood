import React from 'react'
import styled from 'styled-components'

const SidebarContainer = styled.nav`
    background-color: #c07676;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 10%;
    width: 90%;
    height: 100vh;
    @media (min-width: 700px) {
        left: 80%;
        width: 50%;
    }
`


type Props = {}

const Sidebar = (props: Props) => {
  return (
    <SidebarContainer>
        Sidebar
    </SidebarContainer>
  )
}

export default Sidebar

