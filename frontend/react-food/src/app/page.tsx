"use client"
import styled from "styled-components";

// Components
import Search from "@/components/Search";
import Button from "@/components/Buttons/Button";

const HomeContainer = styled.main`
  
`


import IconButton from "@/components/Buttons/IconButton";
import { MdDone } from "react-icons/md";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <HomeContainer>
      <Search />
      {/* <Banner banner="primary" img="/pizza.png" p1="até" strong="30% de Desconto" p2="em Pizzas"/>
      <Banner banner="secondary" img="/buguer.png" p1="a partir de" strong="R$17,90" p2="em lanches"/> */}
    </HomeContainer>  
  );
}
