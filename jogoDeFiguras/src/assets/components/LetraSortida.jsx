import React, { useState } from 'react'

function LetraSortida() {
    let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const [letra, setLetra]= useState('" ? "')

    function sortearLetra() {
        
        const a= letras[Math.floor(Math.random() * letras.length)]
        setLetra(a)
       
    }
  return (
    <div>
      
      <p> {letra}</p>
      <button onClick={sortearLetra}>Sortear Letra</button>

    </div>
  )
}

export default LetraSortida
