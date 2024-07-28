import styled from "styled-components";


export const SidebarContainer = styled.nav<{ isOpen: boolean }>`
    background-color: var(--octonary-color);
    color: var(--quaternary-color);
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 380px;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease;
    opacity: 100;
    padding: 20px;

    div {  
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-bottom: 2px solid var(--senary-color);
        padding-bottom: 20px;

        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }
    }
`

export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 1;
`

export const SidebarMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    margin-top: 20px;

`