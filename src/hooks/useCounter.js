import React, { useState } from 'react'
import { useFetch } from './useFetch'



export const useCounter = (initialState = 10) => {
  
    const {data} = useFetch(`https://62678c07786383364220f769.mockapi.io/frases/`);

    


    const [counter, setCounter] = useState(initialState)

    const reset = () => {
        setCounter(initialState);
    }

 
    const increment = () => {
        if (counter < data.length  ) {
            setCounter(counter + 1);
        }

        else {
            setCounter(initialState)
        }

       
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
