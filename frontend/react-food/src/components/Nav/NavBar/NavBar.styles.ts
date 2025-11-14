"use client"
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

    span.navbar-search {
        display: none;
    }

    @media (min-width: 1300px) {
        padding: 30px 128px;
        border-bottom: 2px solid #0000002c;
        span.navbar-search {
            display: flex;
        }
    }
`