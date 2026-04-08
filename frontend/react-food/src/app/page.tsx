"use client"
import styled from "styled-components";
import { HomeWrapper } from "@/components/Wrappers/Wrapper.styles";

// Components
import SearchContainer from "@/components/Search/SearchContainer";
import Button from "@/components/Buttons/Button";
import CategoryButton from "@/components/Buttons/Category/CategoryButton";
import Order from "@/components/Orders/Order";
import Orders from "@/components/Orders/Orders";

const HomeContainer = styled.main`
  height: 100vh;
  padding: 20px;

  @media (min-width: 1300px) {
    padding: 0px;
  }
`



import IconButton from "@/components/Buttons/IconButton";
import { MdDone } from "react-icons/md";
import Banner from "@/components/Banner/Banner";
import Status from "@/components/Status/Status";
import Category from "@/components/Buttons/Category/Category";
import { Banners } from "@/components/Banner/Banner.styles";
import Restaurant from "@/components/Restaurant/Restaurant";


export default function Home() {
  return (
    <HomeContainer>
      <SearchContainer />
      <HomeWrapper>
        <Orders />
        <Banners>
          <Banner banner="primary" img="/pizza.png" p1="até" strong="30% de Desconto" p2="em Pizzas"/>
          <Banner banner="secondary" img="/buguer.png" p1="a partir de" strong="R$17,90" p2="em lanches"/> 
        </Banners>
        <Restaurant /> 
      </HomeWrapper>
      <Category />
      {/* <Category />
      <Banner banner="primary" img="/pizza.png" p1="até" strong="30% de Desconto" p2="em Pizzas"/>
      <Banner banner="secondary" img="/buguer.png" p1="a partir de" strong="R$17,90" p2="em lanches"/>  
      <Status title="27%" status="discount" /> */}
    </HomeContainer>  
  );
}
