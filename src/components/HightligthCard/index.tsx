import React from 'react'
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,

} from "./styles"

type typeCard="entrada"|"saida"|"total"
interface PropsCard{
  amount:string;
  lastTransaction:string;
  title:string;
  type:typeCard
}
const icon={
  entrada:"arrow-up-circle",
  saida:"arrow-down-circle",
  total:"dollar-sign"
}
export  function HigthligthCard({type,title,amount,lastTransaction}:PropsCard) {
  return (
    <Container
     type={type}
    >
        <Header>
            <Title
            type={type}
            >{title}</Title>
            <Icon name={icon[type]} type={type}/>
        </Header>

        <Footer>
            <Amount
            type={type}
            >{amount}</Amount>
            <LastTransaction
            type={type}
            >{lastTransaction}</LastTransaction>
        </Footer>
    </Container>
  )
}
