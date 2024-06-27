import React, {useReducer} from 'react'

import './HookReducer.css'

const inicialEstado = { contador: 0}

function reducer (state,action){
  switch(action.type) {
    case 'incrementar':
      return{ contador: state.contador + 1};
    case 'decrementar':
      return{ contador: state.contador - 1};
    default:
      throw new Error()
  }
}

const HookReducer = () => {
  const [state, dispatch] = useReducer (reducer, inicialEstado)

  return (
    <div>
      <h2>Reducer</h2>
      <p className='contador'>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'decrementar'})}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'incrementar'})}>incrementar</button>
    </div>
  )
}

export default HookReducer
