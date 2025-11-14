"use client"
import styled from "styled-components";

export const SearchComponent = styled.form`
  display: flex;
  background-color: var(--senary-color);
  padding-left: 20px;
  max-width: 700px;
  border-radius: 15px;
  margin: 0 auto;
  /* position: relative; */

  input {
    outline: none;
    background-color: transparent;
    border: none;
    width: 95%;
    font-size: 1.1em;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    /* position: absolute;  */
    /* top: 0px;  */
    /* left: 89%; */
  }

  @media (min-width: 1300px) {
    max-width: 800px;

  }
`


export const SearchContainerComponent = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 100px;
  background-color: var(--primary-color);
  height: 500px;
  color: white;
  position: relative;

  h1 {
    font-size: 48px;
  }

  p {
    padding-bottom: 30px;
  }


  span.search-container {
    width: 700px;
    position: absolute;
    background-color: white;
    padding: 20px 40px 20px 20px;
    border-radius: 10px;

  }

  div.search {

  }

  div.search-image {
    position: relative;
    top: 23.5%;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`