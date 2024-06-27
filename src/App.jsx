import { useState, useEffect } from 'react'
import './App.css'

import Img from './assets/Pokemon-API.png'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokeName, setPokeName] = useState('')
  const [sprite, setSprite] = useState('')
  const [type, setType] = useState('')
  const [weight, setWeight] = useState(0)
  const [altura, setAltura] = useState(0)
  const [id, setId] = useState(0)
  const [visible, setVisible] = useState(false)


  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((resp) => resp.json())
    .then((data) => setPokemons(data.results))
  })

  useEffect(() => {
    if (pokeName !== '') {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((resp) => resp.json())
        .then((data) => {
          setAltura(data.height)
          setId(data.id)
          setSprite(data.sprites.other.showdown.front_default)
          setType(data.types.map(type => type.type.name).join(', '))
          setWeight(data.weight)
          setVisible(true)
        })
    } else {
      setVisible(false)
    }
  }, [pokeName])
  



  return (
    <div>
      <img src={Img} width="60%"/>

      <form>
        <select onChange={(e) => {setPokeName(e.target.value)}}>
          <option value='' disabled selected>Escolha um pokemon</option>
          {pokemons.map( (pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
      </form>

      <p className={`choose ${visible ? 'visible' : 'hidden'}`}>Pokemon selecionado: <span>{pokeName}</span> #{id}</p>
      
      <div className={`pokecard ${visible ? 'visible' : 'hidden'}`}>

        <img className='pokemon' src={sprite}/>
        <div className="info">
          <p>Altura:<span> {altura}m</span></p>
          <p>Peso: <span> {weight}kg</span></p>
          <p>Tipo: <span> {type}</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
