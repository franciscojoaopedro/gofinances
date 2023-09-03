import React,{useState,useEffect} from "react";
import { Alert, Modal,TouchableWithoutFeedback} from "react-native"
import {useForm} from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid"
import {useNavigation} from "@react-navigation/native"


import {
Container,
Header,
Title,
Form,
Fields,
TransactionType,
} from "./styles";


import { Button } from "../../components/Forms/button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import {CategorySelect} from "../CategorySelect/"
import { InputForm } from "../../components/Forms/inputForm";
import { Keyboard } from "react-native";


interface FormData{
    name:string,
    amount:string
}

const schema=Yup.object().shape({
    name:Yup.string().required("Nome é obrigatório!"),
    amount:Yup.number().typeError("Informe um valor númerico!")
    .positive("O valor não pode ser negativo!")
    .required("O preço é obrigatório!")
})
export const collectionKey="@gofinances:transactions";

interface DataTransction{
    amout:string;
    category:string;
    name:string,
    transactionType:string
}
export function Register(){

    const[transactionType,setTransactionType]=useState("")
    const [categoryModalOpen,setCategoryModalOpen]=useState<boolean>(false)
    const [category,setCategory]=useState({
        key:"category",
        name:"Categoria",
    })

    const navegation=useNavigation()

    const {
    control,
    handleSubmit,
    reset,
    formState:{errors}
    }=useForm({
        resolver:yupResolver(schema)
    });

    function handleTransactionTypeSelect(type:"entrada"|"saida"){
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }

     async function handleSubmitRegister <T extends FormData > (form:T):void{
        if(!transactionType)
            return Alert.alert("Seleciona o tipo da transação!") ;
        if(category.key==="category")
            return Alert.alert("Seleciona  categoria") ;
       
        const newTransaction={
            id:String(uuid.v4()),
            name:form.name,
            amount:form.amount,
            type:transactionType,
            category:category.key,
            date:new Date(),
        }
        try{
            const data= await AsyncStorage.getItem(collectionKey)
            const currentData=data?JSON.parse(data):[]

            const dataFormatted=[
                ...currentData,
                newTransaction]
            
           await AsyncStorage.setItem(collectionKey,JSON.stringify(dataFormatted))
           apagarInputs()
           Alert.alert("Sucesso!");
           navegation.navigate("Transação");
        }catch(error){
            console.log(error)
            Alert.alert("Não possível salvar ");
        }
    }
   

    // limpar os inputs
    function apagarInputs():void{
        setTransactionType("");
        setCategory({key:"category",name:"Categoria",})
        reset()
       }

    // apagar as transations no storages

    async  function removeAllTransactions(){
        await AsyncStorage.removeItem(collectionKey);
    }

  
        
   
    return(
            <TouchableWithoutFeedback  onPress={Keyboard.dismiss} >
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
           <Form>
            <Fields>
            <InputForm
            name="name"
            control={control}
           placeholder="Nome"
           autoCapitalize="sentences"
           autoCorrect={false}
           error={errors.name && errors.name.message}


           />
           <InputForm
            name="amount"
            control={control}
           placeholder="Preço"
           keyboardType="numeric"
           error={errors.amount && errors.amount.message}
      
           />
           <TransactionType>
           <TransactionTypeButton
           title="Entradas"
           type="entrada"
           onPress={()=>handleTransactionTypeSelect("entrada")}
           isActive={transactionType==="entrada"}

           />
           <TransactionTypeButton
           title="Saidas"
           type="saida"
           onPress={()=>handleTransactionTypeSelect("saida")}
           isActive={transactionType==="saida"}
           />
           </TransactionType>

           <CategorySelectButton
           onPress={handleOpenSelectCategoryModal}
           title={category.name}
           />
            </Fields>
           <Button  
            onPress={handleSubmit(handleSubmitRegister)}
            title="Enviar"
           />
           </Form>

           <Modal visible={categoryModalOpen} >
            <CategorySelect
            
            category={category}
            closeSelectCategory={handleCloseSelectCategoryModal}
            setCategory={setCategory}
            />
           </Modal>

        </Container>
           </TouchableWithoutFeedback>
    )
}