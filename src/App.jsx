import React, { useEffect, useState } from 'react'

import axios from "axios"
//  https://api.sampleapis.com/movies/animation


export default function App() {


  const [filmes, setFilmes] = useState([])

  const [categoria, setCategoria] = useState("animation")


  async function buscadados() {

    const dados = await axios.get(`https://api.sampleapis.com/movies/${categoria}`)

    console.log(dados.data)
    setFilmes(dados.data)

  }


  useEffect(() => {
    buscadados()
  }, [categoria])

const [busca,setBusca] = useState("")

const filtrados = filmes.filter((item) =>item.title.includes(busca) )

  return (
    <div>

      <button onClick={() => setCategoria("horror")} >Terror</button>
      <button onClick={() => setCategoria("drama")} >Drama</button>
      <button onClick={() => setCategoria("family")} >Familia</button>

      <input onChange={(e) => setBusca(e.target.value) }   placeholder='busca filmes.....' type="text" />

      {
        filtrados.map((item) => (
          <div>
            <img src={item.posterURL} alt="" />
            <h2>{item.title}</h2>
          </div>
        ))
      }



    </div>
  )
}
