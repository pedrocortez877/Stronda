import { useContext } from "react";

import { Container, TextArea, Text, Icon, ButtonDeleteProduct } from "./styles";
import CloseImage from "../../assets/close.png";

import ProductOfASaleContext from "../../contexts/ProductOfASaleContext";

export function ItemList({ product }) {
  const { products, setProducts } = useContext(ProductOfASaleContext);

  if (product) {
    product.Value = product.Value.toString().replace(".", ",");
    product.Total = product.Total.toString().replace(".", ",");
  }

  function handleClickDeleteProduct() {
    setProducts(
      products.filter((object) => {
        return object.Id !== product.Id;
      })
    );
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
            <Text>R${product.Value}</Text>
          </TextArea>
          <TextArea>
            <Text>{product.Quantity}</Text>
          </TextArea>
          <TextArea>
            <Text>R${product.Total}</Text>
          </TextArea>
          <ButtonDeleteProduct onClick={handleClickDeleteProduct}>
            <Icon src={CloseImage} />
          </ButtonDeleteProduct>
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
