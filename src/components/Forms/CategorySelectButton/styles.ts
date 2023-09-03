import styled from "styled-components/native";
import {Feather} from "@expo/vector-icons"
import { themes } from "../../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";



export const Container=styled.TouchableOpacity.attrs({
    ativeOpacity:0.7
})`
background-color:${themes.colors.shape};
flex-direction:row;
justify-content:space-between;
`

export const Category=styled.Text`
font-family: ${themes.fonts.regular};
font-size: ${RFValue(14)}px;
color:${themes.colors.text_dark};
`;
export const Icon=styled(Feather)`
font-size: ${RFValue(20)}px;
color:${themes.colors.text};
`;
