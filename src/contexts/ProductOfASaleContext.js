import { createContext, useState } from "react";

const ProductOfASaleContext = createContext({});

export function ProductOfASaleContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <ProductOfASaleContext.Provider
      value={{ products, setProducts }}
    >
      {children}
    </ProductOfASaleContext.Provider>
  );
}

export default ProductOfASaleContext;
