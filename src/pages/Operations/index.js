import { Sidebar } from '../../components/Sidebar';
import { CardOperation } from  '../../components/CardOperation';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';

import { ModalContainer } from '../../config/modalContainer';

import '../../styles/index.css';

import { 
  Container, 
  ScreenOperation,
  RowReportDayAndSale,
  RowReportMonthAndPurchase
} from './styles';

export function Operations(){
  // Modal state
  const { modalOpen, close, open } = useModal();

  function openBasicSaleReport(){
  }

  function openBasicPurchasedReport(){

  }

  function openScreenPurchasedProduct(){

  }

  return (
    <Container>
      <Sidebar />
      <ScreenOperation>
        <RowReportDayAndSale>
          <CardOperation 
            title="Relatório básico de vendas"
            isCardReport
            isCardPurchased={false}
            valueSaleDay={2220.90}
            valueSaleMonth={32222.20}
            onClick={openBasicSaleReport}
          />
          <CardOperation 
            title="Controle de vendas"
            isCardReport={false}
            isCardPurchased={false}
            onClick={open}
          />
        </RowReportDayAndSale>
        <RowReportMonthAndPurchase>
        <CardOperation 
            title="Relatório básico de compras"
            isCardReport
            isCardPurchased
            valuePurchasedDay={2220.90}
            valuePurchasedMonth={32222.20}
            onClick={openBasicPurchasedReport}
          />
          <CardOperation 
            title="Controle de compras"
            isCardReport={false}
            isCardPurchased
            onClick={openScreenPurchasedProduct}
          />
        </RowReportMonthAndPurchase>
        <ModalContainer label="">
          {modalOpen && (
            <Modal modalOpen={modalOpen} modalSaleProduct={true} handleClose={close} />
          )}
        </ModalContainer>
      </ScreenOperation>
    </Container>
  );
}