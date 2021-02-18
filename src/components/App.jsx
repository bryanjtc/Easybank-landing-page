import React from "react";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./pages/homepage.jsx";
function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
