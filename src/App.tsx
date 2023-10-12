import './App.css';
import card1 from './content/image/card1.svg'
import card2 from './content/image/card2.jpg'
import card3 from './content/image/card3.jpg'
import styled, {css} from 'styled-components';
import {FotoStyled} from "./component/Foto.styled";
import {HTitleStyled} from "./component/HTitle.styled";
import {TextPStyled} from "./component/TextP.styled";
import {StyledBtn} from "./component/Button.styled";
import {CardsTheme} from "./component/styles/Theme.styles";



function App() {
    return (<Box>
            <CardFC card={card1} cardNumber="1" title="Card1" headline="Headline"
                    textMain="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen."/>
            <CardFC card={card2} cardNumber="2" title="Card2" headline="Forest"
                    textMain="Forests are a large area covered chiefly with trees and undergrowth."/>
            <CardFC card={card3} cardNumber="3" title="Card3" headline="Birds"
                    textMain="Birds are a group of warm-blooded vertebrates constituting the class Aves."/>
        </Box>
    );
}

const CardFC: React.FC<CardPropsType> = (props) => {

    return (
        <Card title={props.title} cardNumber={props.cardNumber} >
            <FotoStyled src={props.card} cardNumber={props.cardNumber} alt="there is no info"/>
            <HTitleStyled cardNumber={props.cardNumber}>{props.headline}</HTitleStyled>
            <TextPStyled cardNumber={props.cardNumber}>{props.textMain}</TextPStyled>
            <ButtonBox>
                <StyledBtn cardNumber={props.cardNumber} colored>See more</StyledBtn>
                <StyledBtn cardNumber={props.cardNumber} outlined>Save</StyledBtn>
            </ButtonBox>
        </Card>
    )
}

type CardPropsType = {
    title: string,
    card: string,
    headline:string;
    textMain:string;
} & CardNumberType
export type CardNumberType = {
    cardNumber: "1" | "2" | "3",
}
export default App;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
  //Adaptation to the devices
  flex-wrap: wrap;
`
const Card = styled.div<CardNumberType>`
  max-width: 300px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  border: none;
  padding:10px 10px 22px 10px; 
  ${props => props.cardNumber === "1" && css<CardNumberType>`
    background-color:${CardsTheme.colors.bgc1}
  `}
  ${props => props.cardNumber === "2" && css<CardNumberType>`
    background-color:${CardsTheme.colors.bgc2}
  `}
  ${props => props.cardNumber === "3" && css<CardNumberType>`
    background-color:${CardsTheme.colors.bgc3}
  `}
`
const ButtonBox = styled.div`
  display: flex;
  margin: 0 auto 0 0;
  padding: 19px 0 0 10px;
  gap: 12px;
`