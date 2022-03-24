import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Input";
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
} from "./styles";

export function ProductSale() {
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
                  <RadioButtonTypePerson type="radio" />
                  <RadioButtonTypePersonLabel>
                    Jurídica
                  </RadioButtonTypePersonLabel>
                  <RadioButtonTypePerson type="radio" />
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
                  width="250px"
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
          <Section>
            <CustomerTitleArea>
              <CustomerTitle>Produtos</CustomerTitle>
            </CustomerTitleArea>
          </Section>
        </SalesDashboard>
      </ScreenOperation>
    </Container>
  );
}
