import { createContext, useEffect, useState } from "react";

const ProductSaleContext = createContext({});

export function ProductSaleContextProvider({ children }) {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    console.log(totalValue);
  }, [totalValue]);

  function changeTotalValue(value) {
    console.log({value});
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
