import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ScreenOperation = styled.div`
  flex: 1;
  display: flex;
  background-color: var(--background_light);
  flex-direction: column;
`;

export const RowReportDayAndSale = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const RowReportMonthAndPurchase = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;