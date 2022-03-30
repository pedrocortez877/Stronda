import { Container, TextArea, Text, Icon } from "./styles";
import CloseImage from "../../assets/close.png";

export function ItemList(props) {
  const { product } = props;

  if (product) {
    product.SaleValue = product.SaleValue.toString().replace(".", ",");
    product.TotalValue = product.TotalValue.toString().replace(".", ",");
  }

  return (
    <Container>
      {product ? (
        <>
          <TextArea>
            <Text>{product.Name}</Text>
          </TextArea>
          <TextArea>
            <Text>{product.Brand}</Text>
          </TextArea>
          <TextArea>
            <Text>R${product.SaleValue}</Text>
          </TextArea>
          <TextArea>
            <Text>{product.Quantity}</Text>
          </TextArea>
          <TextArea>
            <Text>R${product.TotalValue}</Text>
          </TextArea>
          <TextArea>
            <Icon src={CloseImage} />
          </TextArea>
        </>
      ) : (
        <>
          <TextArea>
            <Text color="var">Produto</Text>
          </TextArea>
          <TextArea>
            <Text color="var">Marca</Text>
          </TextArea>
          <TextArea>
            <Text color="var">Valor</Text>
          </TextArea>
          <TextArea>
            <Text color="var">Quantidade</Text>
          </TextArea>
          <TextArea>
            <Text color="var">Total</Text>
          </TextArea>
          <TextArea>
            <Text color="var">Excluir</Text>
          </TextArea>
        </>
      )}
    </Container>
  );
}
