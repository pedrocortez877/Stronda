import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Input";
import { ItemList } from "../../components/ItemList";

import IconPlus from "../../assets/plus.png";

import {
  Container,
  ScreenOperation,
  SalesDashboard,
  SalesDashboardTitleArea,
  SalesDashboardTitle,
  Section,
  CustomerTitleArea,
  CustomerTitle,
  LineCustomerInformations,
  RadioButtonArea,
  InputsArea,
  RadioButtonTypePerson,
  RadioButtonTypePersonLabel,
  LabelInputs,
  ProductsListArea,
  ButtonConfirmSale,
  IconAddProduct,
  ButtonAddProduct,
} from "./styles";

export function ProductSale() {
  const [products, setProducts] = useState([]);

  const [select, setSelect] = useState("NATURAL_PERSON");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    setProducts([
      {
        Name: "Alto Falante 6x9",
        Brand: "Pionner",
        SaleValue: 899.99,
        Quantity: 1,
        TotalValue: 899.99,
      },
      {
        Name: "Potência 40000",
        Brand: "Taramps",
        SaleValue: 7626.99,
        Quantity: 1,
        TotalValue: 7626.99,
      },
      {
        Name: "Fio 20mm",
        Brand: "Tecnoise",
        SaleValue: 98.99,
        Quantity: 1,
        TotalValue: 98.99,
      },
      {
        Name: "Travas",
        Brand: "Fiat",
        SaleValue: 599.98,
        Quantity: 1,
        TotalValue: 599.98,
      },
      {
        Name: "Vidros",
        Brand: "Fiat",
        SaleValue: 599.98,
        Quantity: 1,
        TotalValue: 599.98,
      },
      {
        Name: "Maçaneta",
        Brand: "Fiat",
        SaleValue: 599.98,
        Quantity: 1,
        TotalValue: 599.98,
      },
      {
        Name: "Limpador",
        Brand: "Fiat",
        SaleValue: 599.98,
        Quantity: 1,
        TotalValue: 599.98,
      },
      {
        Name: "Chave",
        Brand: "Fiat",
        SaleValue: 599.98,
        Quantity: 1,
        TotalValue: 599.98,
      },
    ]);
  }, []);
  return (
    <Container>
      <Sidebar />
      <ScreenOperation>
        <SalesDashboard>
          <SalesDashboardTitleArea>
            <SalesDashboardTitle>Controle de vendas</SalesDashboardTitle>
          </SalesDashboardTitleArea>
          <Section>
            <CustomerTitleArea>
              <CustomerTitle>Dados do cliente</CustomerTitle>
            </CustomerTitleArea>
            <LineCustomerInformations>
              <InputsArea>
                <LabelInputs>Pessoa:</LabelInputs>
                <RadioButtonArea>
                  <RadioButtonTypePersonLabel>
                    Física
                  </RadioButtonTypePersonLabel>
                  <RadioButtonTypePerson
                    type="radio"
                    name="radio"
                    value="NATURAL_PERSON"
                    checked={select === "NATURAL_PERSON"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                  <RadioButtonTypePersonLabel>
                    Jurídica
                  </RadioButtonTypePersonLabel>
                  <RadioButtonTypePerson
                    type="radio"
                    name="radio"
                    value="LEGAL_PERSON"
                    checked={select === "LEGAL_PERSON"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                </RadioButtonArea>
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">CPF:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="123.456.789-09"
                  width="180px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Nome:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="Aderbal Pereira"
                  width="290px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Telefone:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="(16)99999-9999"
                  width="250px"
                />
              </InputsArea>
            </LineCustomerInformations>
            <CustomerTitleArea>
              <CustomerTitle>Dados de endereço</CustomerTitle>
            </CustomerTitleArea>
            <LineCustomerInformations>
              <InputsArea>
                <LabelInputs paddingLeft="15px">CEP:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="14407-347"
                  width="180px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Rua:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="Rua Tobias Dias Fernandes"
                  width="350px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Nº:</LabelInputs>
                <Input isPassword={false} placeholder="222" width="90px" />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Complemento:</LabelInputs>
                <Input isPassword={false} placeholder="SP" width="250px" />
              </InputsArea>
            </LineCustomerInformations>
            <LineCustomerInformations justifyContent="space-around">
              <InputsArea>
                <LabelInputs paddingLeft="15px">Bairro:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="Leporace 3"
                  width="330px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Cidade:</LabelInputs>
                <Input isPassword={false} placeholder="Franca" width="290px" />
              </InputsArea>
              <InputsArea>
                <LabelInputs>Estado:</LabelInputs>
                <Input isPassword={false} placeholder="SP" width="90px" />
              </InputsArea>
            </LineCustomerInformations>
          </Section>
          <CustomerTitleArea>
            <CustomerTitle>Produtos</CustomerTitle>
          </CustomerTitleArea>
          <Section flexDirection="row">
            <ProductsListArea>
              <ItemList />
              {products.map((product) => (
                <ItemList key={product.Name} product={product} />
              ))}
            </ProductsListArea>
            <ButtonAddProduct>
              <IconAddProduct src={IconPlus} onClick={handleOpen} />
            </ButtonAddProduct>
          </Section>
          <Section marginTop="20px">
            <LineCustomerInformations>
              <InputsArea>
                <LabelInputs paddingLeft="40px">Valor total:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="R$8283,90"
                  width="190px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="40px">Desconto %:</LabelInputs>
                <Input isPassword={false} placeholder="10%" width="190px" />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="22px">Valor desconto:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="R$828,39"
                  width="190px"
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="35px">Valor líquido:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="R$7455,51"
                  width="190px"
                />
              </InputsArea>
            </LineCustomerInformations>
          </Section>
          <Section marginTop="20px">
            <LineCustomerInformations>
              <InputsArea>
                <ButtonConfirmSale>Finalizar venda</ButtonConfirmSale>
              </InputsArea>
            </LineCustomerInformations>
          </Section>
        </SalesDashboard>
      </ScreenOperation>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}