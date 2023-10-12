import styled, {css} from "styled-components";
import {CardNumberType} from "../App";
import {CardsTheme} from "./styles/Theme.styles";

export const StyledBtn=styled.button <{colored?:boolean,outlined?:boolean} & CardNumberType>`
  max-width: 86px;
  width: 100%;
  height:30px;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10px;
  ${props => props.cardNumber === "1" && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
    ${props => props.colored && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
      color: rgba(255, 255, 255, 1);
      background-color: ${CardsTheme.colors.card1};
      border: solid 2px ${CardsTheme.colors.card1};

      &:hover {
        border-color: rgba(241, 213, 60, 0.99);
        color: ${CardsTheme.colors.card1};
        background-color: rgba(241, 213, 60, 0.99);
      }
    `}
    ${props => props.outlined && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
      color: ${CardsTheme.colors.card1};
      background-color: transparent;
      border: solid 2px ${CardsTheme.colors.card1};

      &:hover {
        border-color: ${CardsTheme.colors.card1};
        color: ${CardsTheme.colors.card1};
        background-color: rgba(241, 213, 60, 0.99);
      }
    `}
  `}
  ${props => props.cardNumber === "2" && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
    ${props => props.colored && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
      color: rgba(255, 255, 255, 1);
      background-color: ${CardsTheme.colors.card2};
      border: solid 2px ${CardsTheme.colors.card2};

      &:hover {
        border-color: ${CardsTheme.colors.card1};
        color: rgba(255, 255, 255, 1);
        background-color: ${CardsTheme.colors.card1};
      }
    `}
    ${props => props.outlined && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
      color: ${CardsTheme.colors.card2};
      border: solid 2px ${CardsTheme.colors.card2};
      background-color: transparent;

      &:hover {
        border-color: ${CardsTheme.colors.text1};
        color: ${CardsTheme.colors.card2};
        background-color: ${CardsTheme.colors.text1};
      }
    `}
  `}
  ${props => props.cardNumber === "3" && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
    ${props => props.colored && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
      color: rgba(255, 255, 255, 1);
      background-color: ${CardsTheme.colors.card3};
      border: solid 2px ${CardsTheme.colors.card3};

      &:hover {
        border-color: ${CardsTheme.colors.text2};
        color: rgba(255, 255, 255, 1);
        background-color: ${CardsTheme.colors.text2};
      }
    `}
    ${props => props.outlined && css<{ colored?: boolean, outlined?: boolean } & CardNumberType>`
      color: ${CardsTheme.colors.card3};
      border: solid 2px ${CardsTheme.colors.card3};
      background-color: transparent;

      &:hover {
        border-color: ${CardsTheme.colors.text2};
        color: rgba(255, 255, 255, 1);
        background-color: ${CardsTheme.colors.text2};
      }
    `}
  `}
`