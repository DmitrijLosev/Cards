import styled, {css} from "styled-components";
import {CardsTheme} from "./styles/Theme.styles";
import {CardNumberType} from "../App";

export const HTitleStyled=styled.h2<CardNumberType>`
  padding:16px 10px 20px 10px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  font-size:16px;
  line-height: 19px;
  text-align:justify;
  
${props=>props.cardNumber === "1" && css<CardNumberType>`
  color:${CardsTheme.colors.title1};
`}
${props=>props.cardNumber === "2" && css<CardNumberType>`
  color:${CardsTheme.colors.title2};
`}
${props=>props.cardNumber === "3" && css<CardNumberType>`
  color:${CardsTheme.colors.title3};
`}
  
`