import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Operations } from "./pages/Operations";
import { ProductSale } from "./pages/ProductSale";

import { ProductOfASaleContextProvider } from "./contexts/ProductOfASaleContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Operations />} />
        <Route
          path="/productSale"
          element={
            <ProductOfASaleContextProvider>
              <ProductSale />
            </ProductOfASaleContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
