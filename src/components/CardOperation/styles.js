import styled from "styled-components";

export const Card = styled.div`
  width: 500px;
  height: 300px;
  flex-direction: column;
  border: 3px solid var(--primary70);

  border-radius: 30px;
`;

export const HeaderCard = styled.div`
  height: 40px;
  border-bottom: 3px solid var(--primary70);
  text-align: center;
  background-color: var(--primary40);
  border-radius: 20px 20px 0px 0px;
`;

export const TitleCard = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: var(--gray-light);

  padding-top: 8px;
`;

export const BodyCard = styled.div``;

export const RowCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DescriptionCardReport = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: var(--gray-light);

  padding: 10px;
`;

export const ValueCardReport = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: var(--primary);

  padding: 5px;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: 2px solid var(--primary40);
  border-radius: 24px;

  font-family: Roboto, sans-serif;
  font-size: 20px;

  width: 300px;

  background: none;
  color: var(--gray-light);

  margin: 30px auto;
  padding: 7px 14px;

  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background: var(--primary40);
    color: white;
  }
`;

export const ButtonSaleOrPurchase = styled.button`
  border: 2px solid var(--primary40);
  border-radius: 24px;

  font-family: Roboto, sans-serif;
  font-size: 16px;

  width: 300px;

  background: none;
  color: var(--gray-light);

  margin: 40px auto;
  padding: 7px 14px;

  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background: var(--primary40);
    color: white;
  }
`;
