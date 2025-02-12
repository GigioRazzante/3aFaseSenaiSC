import React, { useState } from 'react'
import './Demo2.css'
import Usuario from './Usuario'

function Demo2() {
    const [valor, setValor]= useState(0)
    const [usuario, setUsuario]= useState()
    
    function diminuirValor() {
        setValor(valor - 1)
    }
    function aumentarValor() {
        setValor(valor + 1)
    }
  return (
    <div className='container-demo2'>
      
      <button onClick={diminuirValor} className='btnAumentarDiminuir'>-</button>  {valor} <button onClick={aumentarValor}className='btnAumentarDiminuir'>+</button>
        <button onClick={() => {setUsuario(prompt('Username:'))} }>Fazer Login</button>
        {/* {usuario && <p>Olá {usuario}!</p>} */}

        {usuario ? <p>Olá {usuario}!</p> : <p>Faça Login!</p>}

        { usuario && < Usuario username={usuario} />}

    </div>
  )
}

export default Demo2
