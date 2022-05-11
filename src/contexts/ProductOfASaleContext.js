import { createContext, useState } from "react";

const ProductOfASaleContext = createContext({});

export function ProductOfASaleContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts((products) => [...products, product]);
    console.log(products);
  }

  function removeProduct(product) {
    setProducts(products.filter((item) => item.Id !== product.Id));
  }

  return (
    <ProductOfASaleContext.Provider
      value={{ products, setProducts, addProduct, removeProduct }}
    >
      {children}
    </ProductOfASaleContext.Provider>
  );
}

export default ProductOfASaleContext;
