import React from "react";
import { Container,Category,Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";



interface Props extends TouchableOpacityProps {
    title:string
}
export function CategorySelectButton({title,...rest}:Props){
    return<Container {...rest} >
        <Category>{title}</Category>
        <Icon name="chevron-down" />
    </Container>
}