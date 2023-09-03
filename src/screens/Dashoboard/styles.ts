import styled from "styled-components/native"
import {FlatList} from "react-native"
import {themes} from "../../global/styles/theme"
import { RFPercentage,RFValue } from "react-native-responsive-fontsize";
import {Feather} from "@expo/vector-icons"
import {getBottomSpace, getStatusBarHeight} from "react-native-iphone-x-helper"
import { Platform } from "react-native";
import {DataListProps} from "./index"

export const Container=styled.View`
    flex: 1;
    background-color: ${themes.colors.background};
    

`;

export const Header=styled.View`
width: 100%;
height:${RFPercentage(42)}px;
background-color: ${themes.colors.primary};
justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;
export const UserWrapper=styled.View`
    width:100%;
    padding:0px 24px;
    margin-top: ${Platform.OS==="ios"?`${getStatusBarHeight()+RFValue(28)}px`:"48px"
};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const UserInfo=styled.View`
flex-direction: row;
align-items: center;
`;
export const Photo=styled.Image`
width: ${RFValue(48)}px;
height: ${RFValue(48)}px;
border-radius: 10px;
`;
export const User=styled.View`
    margin-left:17px;
`;
export const UserGreeting=styled.Text`
color:${themes.colors.shape};
font-size:${RFValue(18)}px;
font-family:${themes.fonts.regular};
`;
export const UserName=styled.Text`
color:${themes.colors.shape};
font-size:${RFValue(18)}px;
font-family:${themes.fonts.bold};
`;


export const LogoutButton=styled.TouchableOpacity`

`;
export const Icon=styled(Feather)`
    color:${themes.colors.secondary};
    font-size:${RFValue(24)}px;
`
export const HigthligthCards =styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{paddingHorizontal:24}
})`
width:100%;
position:absolute;
margin-top:${RFPercentage(20)}px;

`

export const Tansactions=styled.View`
flex:1;
padding:0 24px;
margin-top:${RFPercentage(12)}px;
`;
export const Title=styled.Text`
font-size:${RFValue(18)}px;
font-family:${themes.fonts.regular};
margin-bottom:16px
`;

export const TransactionList=styled.FlatList
    .attrs({
    showsVerticalScrollIndicator:false,
    contentContainerStyle:{
        paddingBottom:getBottomSpace()
    }
    }
)``;

export const LoadContainer=styled.View`
flex:1;
justify-content: center;
align-items: center;

`