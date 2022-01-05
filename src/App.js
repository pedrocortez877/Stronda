import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Operations } from "./pages/Operations";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Operations />} />
    </Routes>
  </BrowserRouter>
}

export default App;
