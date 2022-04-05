import styled from "styled-components";

export const Container = styled.input`
  border: 2px solid var(--primary40);

  font-family: Roboto, sans-serif;
  font-weight: 500;

  color: var(--gray);

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--gray-dark);
  }
  :-ms-input-placeholder {
    color: var(--gray-dark);
  }

  background: none;

  display: block;
  text-align: center;

  margin: 5px auto;
  padding: 7px 7px;

  width: ${(props) => props.Width};

  outline: none;

  border-radius: 24px;
  transition: 0.25s;

  &:focus {
    border-color: var(--primary);
  }

  @media (max-width: 1320px) {
    &:focus {
      border-color: var(--primary);
    }
  }
`;
