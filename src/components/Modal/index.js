import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Select from 'react-select';

import { stateLogger } from "../../config/statelogger";

import { Backdrop } from "../Backdrop/index";
import { Input } from "../Input/index";

import {
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalContainer,
  dropIn,
  AreaFields,
  LineFields,
  TitleAreas
} from './styles';

const Modal = ({ handleClose, modalSaleProduct }) => {
  const [modalTitle, setModalTitle] = useState('');
  const [optionSelectProducts, setOptionSelectProducts] = useState([
    { value: 'Módulo Taramps', label: 'Taramps T400' },
    { value: 'Alto Falante Pionner', label: 'Pionner 450W' },
    { value: 'Toca CD', label: 'Central Multimídia' },
  ]);
  useEffect(() => {
    if(modalSaleProduct){
      setModalTitle("Registro de venda de produto");
    }else{
      setModalTitle("Registro de venda de serviço");
    }
    stateLogger("Modal", true);
    setOptionSelectProducts({});
    return () => stateLogger("Modal", false);

  }, [modalSaleProduct]);

  return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>{modalTitle}</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <AreaFields>
                <LineFields>
                  <TitleAreas>Dados do cliente</TitleAreas>
                </LineFields>
                <LineFields>
                  <Input width={150} placeholder="CPF" isPassword={false} />
                  <Input width={210} placeholder="Nome Completo" isPassword={false} />
                  <Input width={170} placeholder="Telefone" isPassword={false} />
                </LineFields>
                <LineFields>
                  <Input width={150} placeholder="Cep" isPassword={false} />
                  <Input width={240} placeholder="Endereço" isPassword={false} />
                  <Input width={210} placeholder="E-mail" isPassword={false} />
                </LineFields>
              </AreaFields>
              <AreaFields>
                <LineFields>
                  <TitleAreas>Dados dos produtos</TitleAreas>
                </LineFields>
                <LineFields>
                  <Select options={optionSelectProducts} />
                </LineFields>
              </AreaFields>
            </ModalBody>
            {/* <ModalFooter>
              <ModalButton>
              <motion.button
                className="modal-button"
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
              >
                Close
              </motion.button>
              </ModalButton>
            </ModalFooter> */}
          </ModalContainer>
        </motion.div>
    </Backdrop>
  );
};

export default Modal;


//Nome, rg, cpf, endereco e telefone 
//Input produto com autocomplete
//quantidade
//desconto