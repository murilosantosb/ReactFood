"use client"
import styled from "styled-components";

// Components
import Search from "@/components/Search";
import Button from "@/components/Buttons/Button";

const HomeContainer = styled.main`
  
`


import IconButton from "@/components/Buttons/IconButton";
import { MdDone } from "react-icons/md";

export default function Home() {
  return (
    <HomeContainer>
      <Search />
    </HomeContainer>  
  );
}
