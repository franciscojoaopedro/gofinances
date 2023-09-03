import styled,{css} from "styled-components/native";
import { Feather}  from "@expo/vector-icons"
import { themes } from "../../global/styles/theme";
import {RFValue,RFPercentage} from "react-native-responsive-fontsize"


interface TransactionTypeProps{
    type:"entrada"|"saida";
}

export const Container=styled.View`
    background-color: ${themes.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom:16px ;
`
export const Title=styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${themes.fonts.regular};
`

export const Amount=styled.Text<TransactionTypeProps> `
font-size: ${RFValue(20)}px;
font-family: ${themes.fonts.regular};
color: ${({type}:TransactionTypeProps)=>type==="entrada" ? `${themes.colors.success}`:
`${themes.colors.attention}`};

margin-top: 2px;
`;

export const Footer=styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top:19px;
`;

export const Category=styled.View`
flex-direction: row;
align-items: center;
`;

export const Icon=styled(Feather)`
font-size: ${RFValue(24)}px;
color:${themes.colors.text}
`;

export const CategoryName=styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${themes.fonts.regular};
color: ${themes.colors.text};
margin-left: 17px;
`;
export const Date=styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${themes.fonts.regular};
color: ${themes.colors.text};
`;
