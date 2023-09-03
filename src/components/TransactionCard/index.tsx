import React from "react";
import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
}from "./styles"
import { categories } from "../../utils/categories";
 export interface Category{
    name:string;
    icon:string;

}
export interface TransactionCardProps{
    type:"entrada"|"saida";
    name:string;
    amount:string;
    category:string;
    date:string;
}
export interface Props{
    datas:TransactionCardProps;
}
export const TransactionCard=({datas}:Props)=>{
    const [category]=categories.filter(
        item=>item.key===datas.category
    )


    return(
        <Container>
            <Title>{datas.name}</Title>

            <Amount
            type={datas.type}
            > 
             {datas.type==="saida"&& "-"}
             {datas.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{datas.date}</Date>
            </Footer>
        </Container>
    )
}