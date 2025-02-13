import React from 'react'
import { useState } from 'react'
import './ImagemSortida.css'

function ImagemSortida() {
    const [imagem, setImagem] = useState('./images/imagem6.png')

    
    function sortearImagem(){
        let imagemSorteada = Math.floor(Math.random() * 5) + 1;
        setImagem("./images/imagem"+imagemSorteada+".png")
    }
  return (
    <div className='container-imagemSortida'>
      
      <img src= {imagem} alt=""  className='imgSortida'/>
      <button onClick={sortearImagem}>Sortear Tema</button>

    </div>
  )
}

export default ImagemSortida
