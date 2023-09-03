import React from "react"
import {Container,Header,Title} from "./styles"
import {HistoryCard} from "../../components/HistoryCard"
export function Resume(){
    return(
        <Container>
           <Header>
            <Title>Resumo por categoria</Title>
           </Header>

           <HistoryCard></HistoryCard>
        </Container>
    )
}