import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';



export const Frases = () => {


const {counter, increment} = useCounter(1);

const {loading, data} = useFetch(`https://62678c07786383364220f769.mockapi.io/frases/${counter}`);
const {frase, fecha} = !!data && data;









  return (
    
    
      <div className='content animate__animated animate__bounceInUp'>
            
            <h1 className='titulov2 animate__animated animate__fadeIn animate__delay-2s'>En esta seccion vamos a encontrar, frases, cositas lindas, que nos dijimos desde que nos conocimos, hasta la ultima vez que hablamos</h1>
            
      <div className='frase card animate__animated animate__fadeIn animate__delay-3s'>
        <h1 className='titulin text-center'>Frasesitas</h1>
        


        {

          loading 
              ?
                (
                  <div className='load alert alert-info text-center mt-3'>
                        loading....
                </div>
                )
            :
            
            (
              <blockquote className='caja blockquote'>
                <p className='parrafin mt-1'>{frase}</p>
              <footer className='futer blockquote-footer '>
                {fecha}
              </footer>
            </blockquote>
            )

        }

          

          
         

    </div>

    <button className='botoncito  animate__animated animate__fadeIn animate__delay-3s' onClick={increment}>
            Siguiente frase
          </button>
          
    </div>


  )
}
