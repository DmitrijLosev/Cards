import styled, {css} from "styled-components";
import {CardNumberType} from "../App";
import {CardsTheme} from "./styles/Theme.styles";

export const FotoStyled = styled.img<CardNumberType>`
  max-width: 280px;
  width:100%;
  //It is necessary only for last svg, because not cut required size in tool!!!!
  max-height: 170px;
  border-radius: 10px;
  ${props => props.cardNumber === "1" && css<CardNumberType>`
    border: none;
  `}
  ${props => props.cardNumber === "2" && css<CardNumberType>`
    border: 1px solid ${CardsTheme.colors.card2};
    background-color: snow;
  `}
  ${props => props.cardNumber === "3" && css<CardNumberType>`
    border: 1px solid ${CardsTheme.colors.card3};
    background-color: snow;
  `}
`