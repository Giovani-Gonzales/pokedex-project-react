import React, { useCallback, useState } from "react";
import "./HookCallback.css";

function Botao ({onClick}) {
  console.log('RenderizouBotao')
  return <button onClick={onClick}>Clique</button>
}

const MemorizedBotao = React.memo(Botao)

function HookCallback() {

  const [contador, setContador] = useState(0)

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1)
  }, [])
  return (
    <div className="contador">
      <h2>CallBack</h2>
      <p>Contador: {contador}</p>
      <MemorizedBotao onClick={incrementar}/>
    </div>
  );
}

export default HookCallback;
