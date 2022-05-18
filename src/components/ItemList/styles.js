import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TextArea = styled.div`
  flex: 1;

  text-align: center;

  border-bottom: 1px solid var(--primary20);
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${(props) => (props.color ? "rgba(26, 176, 76, 0.7)" : "#8d8d8d")};
`;

export const Icon = styled.img`
  margin-top: 3px;

  height: 16px;
  width: 16px;
`;

export const ButtonDeleteProduct = styled.button`
  border: none;
  text-align: center;

  border-bottom: 1px solid var(--primary20);

  background: none;

  cursor: pointer;
`;
