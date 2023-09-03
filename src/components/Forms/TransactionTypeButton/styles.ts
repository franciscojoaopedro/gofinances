import styled,{css} from "styled-components/native";

import {Feather} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";
import { themes } from "../../../global/styles/theme";
import {PropsIcons} from "./index"
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps{
    type:"entrada"|"saida"
}
interface ContainerProps  extends IconsProps {
    isActive:boolean
}
export const Container=styled(TouchableOpacity)<ContainerProps>`
width: 48%;
flex-direction: row;
align-items: center;
border-width: ${({isActive}:ContainerProps)=>isActive? 0:1.5}px;
border-style: solid;
border-color: ${themes.colors.text};
border-radius:5px;
padding:16px;
justify-content:center;
align-items: center;

${({type,isActive}:ContainerProps)=>isActive && type ==="saida" && css`
    background-color: ${themes.colors.attention_light};
`}
${({type,isActive}:ContainerProps)=>isActive && type ==="entrada" && css`
    background-color: ${themes.colors.success_light};
`}

`;
export const Icon=styled(Feather)<IconsProps>`
    font-size: ${RFValue(24)}px;
    margin-right:12px;
    color: ${({type}:IconsProps)=>
    type==="entrada"?themes.colors.success:themes.colors.attention};
    
`;

export const Title=styled.Text`
font-family: ${themes.fonts.regular};
font-size: ${RFValue(14)}px;

`;