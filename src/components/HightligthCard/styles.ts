import styled,{css} from "styled-components/native"
import { themes } from "../../global/styles/theme"
import {Feather} from "@expo/vector-icons"
import {RFValue} from "react-native-responsive-fontsize"

interface TypesPropsCards{
    type:"entrada"|"saida"|"total"
}

export const Container=styled.View<TypesPropsCards>`
width:${RFValue(300)}px;
border-radius: 5px;
background-color:${({type})=>
type==="total"?themes.colors.secondary:themes.colors.shape
};
padding: 19px 23px;
margin-right:16px;
padding-bottom: ${RFValue(42)}px;
`
export const Header=styled.View`
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`
export const Title=styled.Text <TypesPropsCards>`
font-family: ${themes.fonts.regular};
font-size:${RFValue(14)}px;

color:${({type})=>
type==="total"?themes.colors.shape:themes.colors.text_dark
}
`;

export const Icon=styled(Feather)<TypesPropsCards>`
font-size: ${RFValue(40)}px;
${(props)=>props.type==="entrada" && css`
color:${themes.colors.success};
`}
${(props)=>props.type==="saida" && css`
color:${themes.colors.attention};
`}
${(props)=>props.type==="total" && css`
color:${themes.colors.shape};
`}
`;
export const Footer=styled.View`
`;
export const Amount=styled.Text<TypesPropsCards>`
font-family: ${themes.fonts.medium};
font-size:${RFValue(32)}px;
margin-top: 38px;
color:${({type})=>
type==="total"?themes.colors.shape:themes.colors.text_dark
}
`;
export const LastTransaction=styled.Text<TypesPropsCards>`
font-family: ${themes.fonts.regular};
font-size:${RFValue(13)}px;
color:${({type})=>
type==="total"?themes.colors.shape:themes.colors.text
}
`;