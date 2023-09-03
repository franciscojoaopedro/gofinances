import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { themes } from "../../../global/styles/theme";


export const Container=styled(TextInput)`
width: 100%;
padding: 16px 18px;

font-family: ${themes.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${themes.colors.title};
background-color: ${themes.colors.shape};
border-radius:5px;
margin-bottom: 8px;

`