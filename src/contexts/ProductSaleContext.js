import { createContext, useState } from "react";

const ProductSaleContext = createContext({});

export function ProductSaleContextProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  function changeTotalValue(value) {
    setTotalValue(oldValue => oldValue + Number(value));
  }

  return (
    <ProductSaleContext.Provider
      value={{ changeTotalValue, totalValue }}
    >
      {children}
    </ProductSaleContext.Provider>
  );
}

export default ProductSaleContext;
