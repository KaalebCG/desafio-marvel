import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personagens from "./pages/Personagens";
import DetalhesPersonagem from "./pages/Caracteristicas/DetalhesPersonagem";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Personagens />} />
          <Route path="/character/:id" element={<DetalhesPersonagem />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
