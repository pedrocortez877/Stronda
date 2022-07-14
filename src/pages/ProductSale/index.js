/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from "react";

import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Input";
import { ItemList } from "../../components/ItemList";
import { ModalComponent } from "../../components/Modal";

import { useModal } from "../../hooks/useModal";

import api from "../../configs/api";

import ProductOfASaleContext from "../../contexts/ProductOfASaleContext";
import ProductSaleContext from "../../contexts/ProductSaleContext";

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
  const { products } = useContext(ProductOfASaleContext);
  const { totalValue } = useContext(ProductSaleContext);

  const [customerType, setcustomerType] = useState("NATURAL_PERSON");
  const [documentNumber, setDocumentNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);
  const [liquidValue, setliquidValue] = useState(0);

  const [totalValueFormated, setTotalValueFormated] = useState("");
  const [discountPercentageFormated, setDiscountPercentageFormated] =
    useState("");
  const [discountValueFormated, setDiscountValueFormated] = useState("");
  const [liquidValueFormated, setLiquidValueFormated] = useState("");

  const [open, toggle] = useModal();

  useEffect(() => {
    if (totalValue) {
      setTotalValueFormated(totalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
      if(discountPercentage === 0 && discountValue === 0){
        setDiscountPercentageFormated("0");
        setDiscountValueFormated("0");
        setliquidValue(totalValue - discountValue);
        setLiquidValueFormated((totalValue - discountValue));
      }
    }else{
      setTotalValueFormated("");
      setLiquidValueFormated("");
    }
  }, [totalValue]);

  useEffect(() => {
    if(discountPercentage !== 0 && discountPercentage !== null){
      setDiscountPercentageFormated(discountPercentage.toString());
    }else{
      setDiscountPercentageFormated("");
    }

    if(discountValue !== 0 && discountValue !== null){
      setDiscountValueFormated(discountValue);
    }else{
      setDiscountValueFormated("");
    }

    if(liquidValue !== 0 && liquidValue !== null){
      setLiquidValueFormated(liquidValue);
    }else{
      setLiquidValueFormated("");
    }
  }, [discountPercentage, discountValue, liquidValue]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setcustomerType(value);
  };

  async function handleChangeZipCode(event) {
    const { value } = event.target;

    const myZipCode = value.replace("_____", "").replace("-", "").replace("___", "").replace("_", "");

    setZipCode(myZipCode);

    if (myZipCode.length === 8) {
      const responseGetAddressWithZipCode = await api.get(
        `https://viacep.com.br/ws/${value}/json/`
      );

      if (!responseGetAddressWithZipCode.data?.erro) {
        const { bairro, localidade, logradouro, uf } =
          responseGetAddressWithZipCode.data;

        setStreet(logradouro);
        setNeighborhood(bairro);
        setCity(localidade);
        setState(uf);
      }
    }
  }

  function handleSaleValue(value, type){
    console.log(value);
    let discount = type === "percentage" ? Number(value.replace("%", "")) : Number(value);
    switch(type){
      case "percentage":
        if(discount > 40){
          discount = 40;
        }
        setDiscountValue(Number(totalValue * (discount / 100)));
        setliquidValue(Number(totalValue - (totalValue * (discount / 100))));
        setDiscountPercentage(discount);
      break;
      case "discount":
        console.log(discount);
        setDiscountPercentage(Number((discount * 100) / totalValue));
        setDiscountValue(Number(discount));
        setliquidValue(Number(totalValue - discount));
      break;
      case "liquid":
        setDiscountPercentage(Number(((totalValue - discount) * 100) / totalValue));
        setDiscountValue(Number(totalValue - discount));
        setliquidValue(Number(discount));
      break;
    }
  }

  function onBlurValueFields(target){
    switch(target){
      case "percentage":
        
      break;
      case "discount":
        
      break;
      case "liquid":
        
      break;
    }
  }

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
                    checked={customerType === "NATURAL_PERSON"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                  <RadioButtonTypePersonLabel>
                    Jurídica
                  </RadioButtonTypePersonLabel>
                  <RadioButtonTypePerson
                    type="radio"
                    name="radio"
                    value="LEGAL_PERSON"
                    checked={customerType === "LEGAL_PERSON"}
                    onChange={(event) => handleSelectChange(event)}
                  />
                </RadioButtonArea>
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">
                  {customerType === "NATURAL_PERSON" ? "CPF:" : "CNPJ:"}
                </LabelInputs>
                <Input
                  isPassword={false}
                  placeholder={
                    customerType === "NATURAL_PERSON"
                      ? "123.456.789-09"
                      : "12.345.678/0001-68"
                  }
                  width="180px"
                  value={documentNumber}
                  onChange={(event) => setDocumentNumber(event.target.value)}
                  maskIndex="cpf"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">
                  {customerType === "NATURAL_PERSON"
                    ? "Nome:"
                    : "Nome Fantasia:"}
                </LabelInputs>
                <Input
                  isPassword={false}
                  placeholder={
                    customerType === "NATURAL_PERSON"
                      ? "Aderbal Pereira Lima"
                      : "Flash Distribuidora LTDA"
                  }
                  width="290px"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Telefone:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="(16)99999-9999"
                  width="250px"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  maskIndex="phone"
                  isMoney={false}
                  disabled={false}
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
                  value={zipCode}
                  onChange={handleChangeZipCode}
                  maskIndex="zipcode"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Rua:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="Rua Tobias Dias Fernandes"
                  width="350px"
                  value={street}
                  onChange={() => {}}
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Nº:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="222"
                  width="90px"
                  value={streetNumber}
                  onChange={(event) => setStreetNumber(event.target.value)}
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Complemento:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="SP"
                  width="250px"
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
            </LineCustomerInformations>
            <LineCustomerInformations justifyContent="space-around">
              <InputsArea>
                <LabelInputs paddingLeft="15px">Bairro:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="Leporace 3"
                  width="330px"
                  value={neighborhood}
                  onChange={(event) => setNeighborhood(event.target.value)}
                  maskIndex="none"
                  isMoney={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="15px">Cidade:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="Franca"
                  width="290px"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs>Estado:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="SP"
                  width="90px"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                />
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
                <ItemList key={product.Id} product={product} />
              ))}
            </ProductsListArea>
            <ButtonAddProduct>
              <IconAddProduct src={IconPlus} onClick={toggle} />
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
                  value={totalValueFormated}
                  onChange={(event) =>
                    setTotalValueFormated(event.target.value)
                  }
                  maskIndex="none"
                  isMoney
                  disabled={true}
                  onBlur={() => {}}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="40px">Desconto %:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="10%"
                  width="190px"
                  value={discountPercentageFormated}
                  onChange={(event) =>
                    handleSaleValue(event.target.value, "percentage")
                  }
                  maskIndex="none"
                  isMoney={false}
                  disabled={false}
                  onBlur={() => onBlurValueFields("percentage")}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="22px">Valor desconto:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="R$828,39"
                  width="190px"
                  value={discountValueFormated}
                  onChange={(event) =>
                    handleSaleValue(event.target.value, "discount")
                  }
                  maskIndex="none"
                  isMoney
                  disabled={false}
                  onBlur={() => onBlurValueFields("discount")}
                />
              </InputsArea>
              <InputsArea>
                <LabelInputs paddingLeft="35px">Valor líquido:</LabelInputs>
                <Input
                  isPassword={false}
                  placeholder="R$7455,51"
                  width="190px"
                  value={liquidValueFormated}
                  onChange={(event) =>
                    handleSaleValue(event.target.value, "liquid")
                  }
                  maskIndex="none"
                  isMoney
                  onBlur={() => onBlurValueFields("liquid")}
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
        <ModalComponent open={open} toggle={toggle} />
      </ScreenOperation>
    </Container>
  );
}
