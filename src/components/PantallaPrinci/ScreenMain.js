import React from 'react'
import Pepe from "../PantallaPrinci/video/video.mp4"


export const ScreenMain = () => {
  return (
    
      <div className="contenedor">
          <div className='tarjeta'>
          <h1 className='titulo animate__animated animate__fadeIn'>Pagina para recordar nuestros momentos mas lindos</h1>
          <p className='parrafo animate__animated animate__fadeIn animate__delay-2s'>Hice esta pagina con el fin de guardar nuestros mas bonitos recuerdos, nuestras fotitos juntos, es una pagina para recordar lo felices que fuimos el uno con el otro. </p>
          <p className='parrafo1 animate__animated animate__fadeIn animate__delay-5s'> Espero que te guste, te amo</p>
          <video autoPlay loop muted className='video'>
            <source src={Pepe}></source>
          </video>
          </div>
      </div>
    
  )
}
