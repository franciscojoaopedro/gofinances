import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HigthligthCards,
  Tansactions,
  Title,
  TransactionList,
  LogoutButton,
  LoadContainer,
} from "./styles";
import { HigthligthCard } from "../../components/HightligthCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import { collectionKey } from "../Register";
import { formatarDate, formatarMoedas } from "../../utils/formateDatas";
import { themes } from "../../global/styles/theme";
import { buscarUltimaDataDeTransacao } from "../../utils/Dates";

export interface DataListProps extends TransactionCardProps {
  id: string;
}
interface HighlightProps {
  amount: string;
  ultimaData:string;
}
interface HighlightData {
  entradas: HighlightProps;
  saidas: HighlightProps;
  amountTotal: HighlightProps;
}
export const Dashboard = () => {
  const [isLoading, setIsLoanding] = useState <boolean>(true);

  const theme=useTheme()

  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highligtData, setHighlighData] = useState<HighlightData>(
    {} as HighlightData
  );

  /*
  const data:DataListProps[]=[
    {   
      id:"1",
      type:"entrada",
        amount:"13.000,00",
        category:{ name:"Salario",icon:"attach-money"},
        title:"Salário do mês",
        date:"28-10-2023"
    },
    {
      id:"2",
      type:"saida",
      amount:"1.500,00",
      category:{ name:"Tv",icon:"payment"},
      title:"Pagamento da Zap",
      date:"28-10-2023"
  },
  {
    id:"3",
    type:"saida",
    amount:"2.000,00",
    category:{ name:"Energia",icon:"payment"},
    title:"Pagamento de energia",
    date:"28-10-2023"
},
]
*/

  // ler todas as transactions da nossa storage
  async function loadDataTransactions() {
    const response = await AsyncStorage.getItem(collectionKey);
    const transactions = response ? JSON.parse(response) : [];
    let totalDeEntradas = 0;
    let totalDeSaidas = 0;
    const transactionsFormatted: DataListProps[] = await transactions.map(
      (transaction: DataListProps) => {
        if (transaction.type === "entrada") {
          totalDeEntradas += Number(transaction.amount);
        } else {
          totalDeSaidas += Number(transaction.amount);
        }

        const amount = formatarMoedas(Number(transaction.amount))
        const date = formatarDate(transaction.date)
        console.log(date)
        return {
          id: transaction.id,
          name: transaction.name,
          amount,
          type: transaction.type,
          category: transaction.category,
          date,
        };
      }
    );
    setTransactions(transactionsFormatted);
    // filtrando ultima data
   
    const ultimaDataDeTransacaoEntrada=buscarUltimaDataDeTransacao(transactions,"entrada")
    const ultimaDataDeTransacaoSaida=buscarUltimaDataDeTransacao(transactions,"saida")
    
    const totalInterval= `01  à ${ultimaDataDeTransacaoSaida}`
    
    console.log(ultimaDataDeTransacaoSaida)
 



    const amountTotal = totalDeEntradas - totalDeSaidas;
    setHighlighData({
      entradas: {
        amount: formatarMoedas(totalDeEntradas),
        ultimaData:ultimaDataDeTransacaoEntrada
      },
      saidas: {
        amount: formatarMoedas(totalDeSaidas),
        ultimaData:ultimaDataDeTransacaoSaida
      },
      amountTotal: {
        amount: formatarMoedas(amountTotal),
        ultimaData:totalInterval
      },
    });

   

    setIsLoanding(false)

  }

  useEffect(() => {
    loadDataTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadDataTransactions();
    }, [])
  );
  return (
    <Container>
      { isLoading?
      <LoadContainer>
        <ActivityIndicator 
        color={theme.colors.primary} 
        size="large" />
      </LoadContainer>
      :
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/79996151?v=4",
                  }}
                />
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Francisco</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HigthligthCards>
            <HigthligthCard
              type="entrada"
              title="Entradas"
              amount={highligtData.entradas.amount}
              lastTransaction={`Última entrada dia ${highligtData.entradas.ultimaData}`}
            />
            <HigthligthCard
              type="saida"
              title="Saidas"
              amount={highligtData.saidas.amount}
              lastTransaction={`Última saida dia ${highligtData.saidas.ultimaData}`}
            />
            <HigthligthCard
              type="total"
              title="Total"
              amount={highligtData.amountTotal.amount}
              lastTransaction={highligtData.amountTotal.ultimaData}
            />
          </HigthligthCards>
          <Tansactions>
            <Title>Transações</Title>

            <TransactionList
              data={transactions}
              keyExtractor={(item: DataListProps) => item.id}
              renderItem={({ item }) => <TransactionCard datas={item} />}
            />
          </Tansactions>
        </>
      }
    </Container>
  );
};
