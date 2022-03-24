import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Operations } from "./pages/Operations";
import { ProductSale } from "./pages/ProductSale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Operations />} />
        <Route path="/productSale" element={<ProductSale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
