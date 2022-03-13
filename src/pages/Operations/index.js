import { Sidebar } from "../../components/Sidebar";
import { CardOperation } from "../../components/CardOperation";

import "../../styles/global.css";

import {
  Container,
  ScreenOperation,
  RowReportDayAndSale,
  RowReportMonthAndPurchase,
} from "./styles";

export function Operations() {
  function openBasicSaleReport() {}

  function openBasicPurchasedReport() {}

  return (
    <Container>
      <Sidebar />
      <ScreenOperation>
        <RowReportDayAndSale>
          <CardOperation
            title="Relatório básico de vendas"
            isCardReport
            isCardPurchased={false}
            valueSaleDay={2220.9}
            valueSaleMonth={32222.2}
            onClick={openBasicSaleReport}
          />
          <CardOperation
            title="Controle de vendas"
            isCardReport={false}
            isCardPurchased={false}
            onClick={() => {}}
          />
        </RowReportDayAndSale>
        <RowReportMonthAndPurchase>
          <CardOperation
            title="Relatório básico de compras"
            isCardReport
            isCardPurchased
            valuePurchasedDay={2220.9}
            valuePurchasedMonth={32222.2}
            onClick={openBasicPurchasedReport}
          />
          <CardOperation
            title="Controle de compras"
            isCardReport={false}
            isCardPurchased
            onClick={() => {}}
          />
        </RowReportMonthAndPurchase>
      </ScreenOperation>
    </Container>
  );
}
