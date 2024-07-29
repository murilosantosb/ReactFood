"use client"
import styled from "styled-components";

// Components
import Search from "@/components/Search";
import Button from "@/components/Buttons/Button";

const HomeContainer = styled.main`
  
`


export default function Home() {
  return (
    <HomeContainer>
      <Search />
      <Button variant="primary" >
        Confirmar
      </Button>
    </HomeContainer>  
  );
}
