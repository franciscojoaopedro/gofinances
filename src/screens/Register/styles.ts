import styled from "styled-components/native"
import { themes } from "../../global/styles/theme";
import { RFValue,RFPercentage } from "react-native-responsive-fontsize";


export const Container=styled.View`
flex: 1;
background-color: ${themes.colors.background};
`
export const Header=styled.View`
width: 100%;

background-color: ${themes.colors.primary};
height: ${RFValue(113)}px;

align-items: center;
justify-content: flex-end;
padding-bottom: 19px;
`;
export const Title=styled.Text`
color: ${themes.colors.shape};

font-family: ${themes.fonts.regular};
font-size: ${RFValue(18)}px;

`;
export const Form=styled.View`
flex:1;
justify-content: space-between;
width: 100%;
padding:24px;
`;
export const Fields=styled.View`

`;

export const TransactionType=styled.View`
width: 100%;
flex-direction: row;
justify-content:space-between;
margin-top: 8px;
margin-bottom: 16px;


`