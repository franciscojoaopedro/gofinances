import React from "react"

import {Container,Icon,Title,} from "./styles"
import { TouchableOpacityProps } from "react-native"



export interface PropsIcons extends TouchableOpacityProps{
    title:string,
    type:"entrada"|"saida",
    isActive:boolean;
}
const icons={
    entrada:"arrow-up-circle",
    saida:"arrow-down-circle"
}
export function TransactionTypeButton({isActive,title,type,...rest}:PropsIcons){
    return<Container {...rest} isActive={isActive} type={type} >
        <Icon
        name={type==="entrada"?icons.entrada:icons.saida}
        type={type}
        />
        <Title>{title}</Title>
    </Container>
}