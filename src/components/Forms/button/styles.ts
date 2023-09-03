import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { themes } from "../../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";


export const Container=styled(TouchableOpacity)`
width: 100%;
background-color: ${themes.colors.secondary};

align-items: center;
border-radius: 5px;
`

export const Title=styled.Text`
padding: 18px;
color: ${themes.colors.shape};
font-family:${themes.fonts.medium};
font-size:${RFValue(14)}px;
`