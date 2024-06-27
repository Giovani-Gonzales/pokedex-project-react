import React, {useState, useMemo } from "react";
import "./HookMemo.css";

function ContagemCara({ contador }) {
  const processamentoIntensivo = (contador) => {
    console.log('Processamento Intensivo...');
    for (let i = 0; i < 1000000; i++) {}
    return contador
  }

  const resultadoMemorizado = useMemo(() => processamentoIntensivo(contador, [contador]))

  return <p>Resultado: {resultadoMemorizado}</p>
}

function HookMemo() {

  const [contador, setContador] = useState(0)

  return(
    <div className="contador">
      <h2>Memo</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar Contador</button>
      <ContagemCara contador={contador}/>
    </div>
  )
}

export default HookMemo;
