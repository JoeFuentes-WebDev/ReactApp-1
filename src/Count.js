import { INIT_COUNT } from './data/constants'
import React, { useState } from 'react';
const Count = () => {
  const [ count, setCount ] = useState(INIT_COUNT);
  const plus = () => setCount(count+1);
  const minus = () => setCount(count > 0? count-1: 0);
  const reset = () => setCount(INIT_COUNT);
  
  return <>
          <h2 data-testid='result'>{ count }</h2>
          <div data-testid='buttons'>
            <button data-testid='plus' onClick={plus}> + </button>
            <button data-testid='minus' onClick={minus}> - </button>
            <button data-testid='reset' onClick={reset}> reset </button>
          </div>
        </>
}

export default Count;