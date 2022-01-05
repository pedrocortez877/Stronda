import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid var(--primary70);
`;

export const ModalTitle = styled.h3`
  text-align: center;
  color: var(--primary);
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  padding: 2rem 0 1.5rem 0;
  margin: 0;
  text-transform: capitalize;
`;

export const ModalBody = styled.div`
 flex-direction: row;
`;

export const AreaFields = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--primary70);
`;

export const LineFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 15px;
`;

export const TitleAreas = styled.h5`
  text-align: center;
  color: var(--primary);
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  padding: 2rem 0 1.5rem 0;
  margin: 0;
  text-transform: capitalize;
`;

export const SelectProduct = styled.select`
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

export const ModalFooter = styled.div`

`;

export const ModalButton = styled.div``;

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};



