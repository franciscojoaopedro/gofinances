import styled from "styled-components/native";
import { themes } from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons"
import {GestureHandlerRootView} from "react-native-gesture-handler"


interface CategoryProps{
    isActive:boolean
}

export const Container=styled(GestureHandlerRootView)`
flex:1;
background-color: ${themes.colors.background};

`


export const Header=styled.View`
width: 100%;
height: ${RFValue(113)}px;

background-color: ${themes.colors.primary};

align-items: center;
justify-content: flex-end;
padding-bottom: 19px;
`;
export const Title=styled.Text`
font-family:${themes.fonts.regular};
font-size: ${RFValue(18)}px;
color:${themes.colors.shape};
`;


export const Category=styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({isActive}:CategoryProps)=>
       isActive?themes.colors.secondary_light:themes.colors.background
    } ;
`;

export const Icon=styled(Feather)`
font-size: ${RFValue(20)}px;
color:${themes.colors.success};
margin-right:16px
`;
export const Name=styled.Text`
font-family: ${themes.fonts.regular};
font-size: ${RFValue(18)}px;
color:${themes.colors.text};
`;

export const Seperator=styled.View`
height: 1px;
width: 100%;
background-color: ${themes.colors.text};
`


export const Footer=styled.View`
width: 100%;
padding: 24px;
`;
