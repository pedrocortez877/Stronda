import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ScreenOperation = styled.div`
  flex: 1;
  display: flex;
  background-color: var(--background_light);

  justify-content: center;
  align-items: center;
`;

export const SalesDashboard = styled.div`
  display: flex;
  height: 90%;
  width: 70%;

  flex-direction: column;

  border: 3px solid var(--primary20);
  border-radius: 17px;

  align-items: center;

  @media(max-width: 1600px) {
    width: 90%;
  }
`;

export const SalesDashboardTitleArea = styled.div`
  display: flex;
  justify-content: center;

  height: 80px;
  width: 100%;

  margin: 0 auto;

  border-bottom: 3px solid var(--primary20);
`;

export const SalesDashboardTitle = styled.h1`
  color: var(--primary70);

  padding-top: 10px;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};

  width: 100%;

  margin: ${(props) => (props.marginTop ? props.marginTop : "0 auto")};

  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
`;

export const CustomerTitleArea = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 15px;
`;

export const CustomerTitle = styled.h2`
  color: var(--primary70);
  padding: 5px;
`;

export const LineCustomerInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-around"};

  width: 100%;
`;

export const RadioButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 15px;
`;

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleDocumentType = styled.p`
  color: var(--gray);
  font-size: 18px;

  margin: 10px;
`;

export const RadioButtonTypePersonLabel = styled.label`
  color: var(--gray);
  font-size: 16px;
`;

export const RadioButtonTypePerson = styled.input`
  appearance: none;

  margin: 6px;

  border: 2px solid var(--primary70);
  border-radius: 50%;

  width: 16px;
  height: 16px;

  cursor: pointer;

  display: grid;
  place-content: center;

  &:before {
    content: "";
    width: 0.45em;
    height: 0.45em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
  }

  &:checked:before {
    transform: scale(1);
    background-color: var(--gray);
  }
`;

export const LabelInputs = styled.label`
  color: var(--primary70);
  font-size: 18px;

  font-weight: bold;

  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "")};
`;

export const ProductsListArea = styled.div`
  width: 90%;

  border-top: 3px solid var(--primary20);
  border-left: 3px solid var(--primary20);
  border-right: 3px solid var(--primary20);
  border-radius: 15px;

  max-height: 150px;

  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-dark);
    border-radius: 3px;
  }
`;

export const ButtonConfirmSale = styled.button`
  background: none;
  width: 180px;
  height: 40px;

  border: 3px solid var(--primary40);
  border-radius: 14px;

  font-size: 16px;
  color: var(--gray);

  cursor: pointer;

  &:hover {
    background-color: var(--primary20);
    color: var(--gray-light);
  }
`;

export const ButtonAddProduct = styled.button`
  background: none;
  border: none;

  align-self: flex-start;

  margin-left: 20px;
  margin-top: 5px;

  cursor: pointer;
`;

export const IconAddProduct = styled.img`
  width: 20px;
  height: 20px;
`;
