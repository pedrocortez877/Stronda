import { useState, useEffect, useContext } from "react";

import { Container, TextArea, Text, Icon, ButtonDeleteProduct } from "./styles";
import CloseImage from "../../assets/close.png";

import ProductOfASaleContext from "../../contexts/ProductOfASaleContext";

export function ItemList({ product }) {
  const { products, setProducts } = useContext(ProductOfASaleContext);
  const [formatedValue, setFormatedValue] = useState("");
  const [formatedTotal, setFormatedTotal] = useState("");

  useEffect(() => {
    if (product) {
      setFormatedValue(product.Value.toString().replace(".", ","));
      setFormatedTotal(product.Total.toString().replace(".", ","));
    }
  }, [product]);

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
            <Text>R${formatedValue}</Text>
          </TextArea>
          <TextArea>
            <Text>{product.Quantity}</Text>
          </TextArea>
          <TextArea>
            <Text>R${formatedTotal}</Text>
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
