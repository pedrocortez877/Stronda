import { useState, useEffect } from 'react';
import { 
  Card,
  HeaderCard,
  TitleCard,
  BodyCard,
  FooterCard,
  DescriptionCardReport,
  RowCard,
  ValueCardReport,
  Button,
  ButtonSaleOrPurchase
} from './styles';

export function CardOperation(props){
  const[valueSaleDay, setValueSaleDay] = useState(0);
  const[valueSaleMonth, setValueSaleMonth] = useState(0);
  const[valuePurchasedDay, setValuePurchasedDay] = useState(0);
  const[valuePurchasedMonth, setValuePurchasedMonth] = useState(0);

  useEffect(() => {
    setValueSaleDay(0);
    setValueSaleMonth(0);
    setValuePurchasedDay(0);
    setValuePurchasedMonth(0);
  }, []);

  return (
    <Card>
      <HeaderCard>
        <TitleCard>{props.title}</TitleCard>
      </HeaderCard>
      <BodyCard>
        <RowCard>
          {props.isCardReport ? 
            <>
              {props.isCardPurchased ?
                <>
                  <DescriptionCardReport>Compras do dia:</DescriptionCardReport>
                  <ValueCardReport>R${valuePurchasedDay}</ValueCardReport>
                </>
                :
                <>
                  <DescriptionCardReport>Vendas do dia:</DescriptionCardReport>
                  <ValueCardReport>R${valueSaleDay}</ValueCardReport>
                </>
              }
              
            </>
            :
            <>
              {props.isCardPurchased ?
                <>
                  <ButtonSaleOrPurchase onClick={props.onClick}>Cadastrar compra de produto</ButtonSaleOrPurchase>
                  <ButtonSaleOrPurchase onClick={props.onClick}>Cadastrar Fornecedor</ButtonSaleOrPurchase>
                </>
                :
                <>
                  <ButtonSaleOrPurchase onClick={props.onClick}>Cadastrar venda de produto</ButtonSaleOrPurchase>
                  <ButtonSaleOrPurchase onClick={props.onClick}>Cadastrar venda de serviço</ButtonSaleOrPurchase>
                </>
              } 
            </>
          }
          
        </RowCard>
        <RowCard>
          {props.isCardReport ?
            <>
            {props.isCardPurchased ? 
              <> 
                <DescriptionCardReport>Compras do mês:</DescriptionCardReport>
                <ValueCardReport>R${valuePurchasedMonth}</ValueCardReport>
              </> 
              : 
              <> 
                <DescriptionCardReport>Vendas do mês:</DescriptionCardReport>
                <ValueCardReport>R${valueSaleMonth}</ValueCardReport>
              </> 
            }
            </>
            :
            <></>
          }
        </RowCard>
      </BodyCard>
      <FooterCard>
        {props.isCardReport ? <Button onClick={props.onClick}>Ver relatório completo</Button> : <></>}
      </FooterCard>
    </Card>
  );
}