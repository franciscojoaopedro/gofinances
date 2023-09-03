import React from "react";


import {Container,Error} from "./styles"
import { Input } from "../input";
import { TextInputProps } from "react-native";
import {Control,Controller} from "react-hook-form"


interface Props extends TextInputProps{
    control:Control;
    name:string;
    error:string
}

export function InputForm ({error,control,name,...rest}:Props){

    return(

        <Container>
            <Controller
            control={control}
            name={name}
            rules={{maxLength:250,}}
            render={({field:{onChange,value}})=>(
                <Input
                onChangeText={onChange}
                value={value}
                {...rest}
                />
            )}
            />
           {error &&  <Error>{error}</Error>}
        </Container>
    )
}




