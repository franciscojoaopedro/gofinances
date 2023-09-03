import{DataListProps} from "../screens/Dashoboard"
import { formatarDate } from "./formateDatas"


export function buscarUltimaDataDeTransacao(collection:DataListProps[],type:"entrada"|"saida"){
    const lastTransaction=Math.max.apply(Math,collection
        .filter(transaction =>transaction.type  ===type)
        .map(transaction=>new Date(transaction.date).getTime()))
   return `${new Date(lastTransaction).getDate()}  de ${Intl.DateTimeFormat("pt-BR",{
    month:"long"
   }).format(lastTransaction)}`
}