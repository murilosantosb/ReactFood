"use client"
import styled from "styled-components";

// Components
import Search from "@/components/Search/Search";
import Button from "@/components/Buttons/Button";
import CategoryButton from "@/components/Buttons/Category/CategoryButton";

const HomeContainer = styled.main`
  height: 100vh;
`


import IconButton from "@/components/Buttons/IconButton";
import { MdDone } from "react-icons/md";
import Banner from "@/components/Banner/Banner";
import Status from "@/components/Status/Status";
import { CategoryContainer } from "@/components/Buttons/Category/Category.styles";

export default function Home() {
  return (
    <HomeContainer>
      <Search />
      {/* <Banner banner="primary" img="/pizza.png" p1="até" strong="30% de Desconto" p2="em Pizzas"/>
      <Banner banner="secondary" img="/buguer.png" p1="a partir de" strong="R$17,90" p2="em lanches"/> */}
      {/* <Status title="27%" status="discount" /> */}
      {/* <Teste /> */}
      <CategoryContainer>
        <CategoryButton name="Pratos" id={1} image_url="/1722811378287 - food.png"/>
        <CategoryButton name="Pratos" id={1} image_url="/1722811378287 - food.png"/>
        <CategoryButton name="Pratos" id={1} image_url="/1722811378287 - food.png"/>
        <CategoryButton name="Pratos" id={1} image_url="/1722811378287 - food.png"/>
        <CategoryButton name="Pratos" id={1} image_url="/1722811378287 - food.png"/>
        <CategoryButton name="Pratos" id={1} image_url="/1722811378287 - food.png"/>
      </CategoryContainer>
    </HomeContainer>  
  );
}
