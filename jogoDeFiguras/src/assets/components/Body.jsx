import React from 'react'
import './Body.css'
import ImagemSortida from './ImagemSortida'
import LetraSortida from './LetraSortida'

function Body() {

  return (
    <div className='container-body'>
        <p>Sorteie um tema abaixo, em seguida sorteie uma letra. Se o tema cair por exemplo: "Lugar" e a letra sorteada for "A", todos jogadores apenas poderam falar lugares com a letra "A". Quem repetir o lugar que ja foi falado perde!</p>
        <ImagemSortida />
       
        <LetraSortida />
        
        
      
    </div>
  )
}

export default Body
