import React from "react"
import{createBottomTabNavigator} from  "@react-navigation/bottom-tabs"
import {Dashboard}from  "../screens/Dashoboard"
import {Register} from "../screens/Register"
import { useTheme } from "styled-components"
import { Platform } from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import { Resume } from "../screens/Resume"

const {Navigator,Screen}=createBottomTabNavigator();

export function AppRoutes(){
    const theme=useTheme()
    return(
        <Navigator 
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:theme.colors.secondary,
            tabBarInactiveTintColor:theme.colors.text,
            tabBarLabelPosition:"beside-icon",
            tabBarStyle:{
                height:88,
                paddingVertical:Platform.OS==="ios"?15:2
            }
        }}
        >
            <Screen
                name="Transação"
                component={Dashboard}
                options={{
                    tabBarIcon:(({size,color})=> 
                <MaterialIcons size={size}  color={color} name="format-list-bulleted" />    
                )
                }}
            />
             <Screen
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon:(({size,color})=> 
                <MaterialIcons size={size}  color={color} name="attach-money" />    
                )
                }}
            />
             <Screen
                name="Resumo"
                component={Resume}
                options={{
                    tabBarIcon:(({size,color})=> 
                <MaterialIcons size={size}  color={color} name="bar-chart" />    
                )
                }}
            />
        </Navigator>
    )
}