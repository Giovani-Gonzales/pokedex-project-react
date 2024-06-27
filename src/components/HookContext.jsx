import React, { useContext, useState } from "react";
import "./HookContext.css";

const TemaContext = React.createContext("light");

function HookContext() {
  const [tema, setTema] = useState("light");
  const alternarTema = () => {
    setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
  };

  return (
    <TemaContext.Provider value={tema}>
      <div>
        <button className={`botao ${tema}`} onClick={alternarTema}>
          Botão com tema {tema}
        </button>
      </div>
    </TemaContext.Provider>
  );
}

export default HookContext;
