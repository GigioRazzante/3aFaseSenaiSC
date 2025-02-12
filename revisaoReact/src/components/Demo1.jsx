import React from 'react'
import { FcSmartphoneTablet } from "react-icons/fc";
import './Demo1.css'

function Demo1() {
function responderClique(){

    alert('Clicadasso paee :D')
  
}
    

  return (
    <div className='container-demo1'> 
    <button onClick={responderClique} className='btnCliqueAq'>Clique aqui</button>
    <button onClick={ () => {alert('Eu vim de uma arrow function:)')}} className='btnCliqueAq'>🗺️localize🗺️</button>
    <img src="./images/Work time.gif" alt="" className='imgAnimada'/>
    
    <FcSmartphoneTablet />
      
    </div>
  )
}

export default Demo1
