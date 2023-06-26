import React from "react";
import Personagens from "./pages/Personagens";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Personagens />;
      <GlobalStyle />
    </>
  );
};

export default App;
