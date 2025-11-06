import styled from "styled-components";

export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    height: 100%;

    svg {
        font-size: 2em;
    }

    @media (min-width: 1200px) {
        padding: 30px 128px;
    }
`