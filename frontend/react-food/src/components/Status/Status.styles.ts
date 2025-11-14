"use client"
import styled from "styled-components";
import { StatusProps } from "@/types/ButtonType";

const StatusDiscount = `
  width: 65px;
  padding: 0px;
  text-align: center;
  color: var(--octonary-color) !important;
  font-weight: 600;
  background-color: var(--primary-color) !important;
`

export const StatusContainer = styled.section<StatusProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 30px;
    font-weight: bold;

    width: ${props => props.width ? props.width : "135px"};
    background-color: ${props => props.status === "process" ? "var(--tertiary-color)" : "var(--septenary-color)"};
    color: ${props => props.status === "process" ? "var(--octonary-color)" : "var(--quinary-color)"};

    ${({ status }) => status === "discount" && StatusDiscount}
`