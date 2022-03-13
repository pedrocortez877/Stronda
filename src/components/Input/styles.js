import styled from 'styled-components';

export const Container = styled.input`
  border: 2px solid var(--primary40);

  font-family: Roboto, sans-serif;
  font-weight: 500;

  color: var(--gray);

  background: none;

  display: block;
  text-align: center;

  margin: 20px auto;
  padding: 10px 10px;

  width: 250px;

  outline: none;

  border-radius: 24px;
  transition: 0.25s;

  &:focus {
    width: 300px;
    border-color: var(--primary);
  }

  @media(max-width: 1320px){
    width: 220px;
    &:focus {
      width: 230px;
      border-color: var(--primary);
    }
  }
`;