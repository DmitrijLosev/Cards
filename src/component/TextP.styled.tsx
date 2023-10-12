import styled, {css} from "styled-components";
import {CardsTheme} from "./styles/Theme.styles";
import {CardNumberType} from "../App";

export const TextPStyled=styled.p<CardNumberType> `
  padding:0 10px;
  font-size:12px;
  font-family: 'Inter', sans-serif;
  font-weight:500;
  text-align:left;
  line-height:20px;
  ${props=>props.cardNumber==="1" && css<CardNumberType>`
    color:${CardsTheme.colors.text1}
`}
  ${props=>props.cardNumber==="2" && css<CardNumberType>`
    color:${CardsTheme.colors.text2}
`}
  ${props=>props.cardNumber==="3" && css<CardNumberType>`
    color:${CardsTheme.colors.text3}
`}
`