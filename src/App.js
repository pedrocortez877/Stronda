import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Operations } from "./pages/Operations";
import { ProductSale } from "./pages/ProductSale";

import { ProductOfASaleContextProvider } from "./contexts/ProductOfASaleContext";
import { ProductSaleContextProvider } from "./contexts/ProductSaleContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Operations />} />
        <Route
          path="/productSale"
          element={
            <ProductSaleContextProvider>
              <ProductOfASaleContextProvider>
                <ProductSale />
              </ProductOfASaleContextProvider>
            </ProductSaleContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
