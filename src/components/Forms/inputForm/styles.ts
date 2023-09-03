import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { themes } from "../../../global/styles/theme"


export const Container=styled.View`
width: 100%;
`
export const Error=styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${themes.fonts.regular};
color: ${themes.colors.attention_light};
margin: 7px 0;

`