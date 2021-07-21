import { INIT_COUNT } from './data/constants';
import React, { useReducer , useState, useEffect } from 'react';
import { REDUCER as reducer } from './AppReducer'

const BetterCount = () => {
  const handleCount = (type) => {
    dispatch({ type })
  }

  const addColor = (e, type) => {
    e.preventDefault();
    dispatch( {type , payload: { color }});
    setColor('');
  }

  const resetColor = () => {
    setColor('');
    dispatch( {type: 'default'}); // do nothing
  }

  const initialState = { count : INIT_COUNT , colors: []};
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => {
    console.log('just to show data based on state change', state)
  }, [state])
  
  const [ color, setColor ] = useState('')

  return <>
          <button data-testid='minus' onClick={() => handleCount('sub')}> minus </button>
          <span data-testid='count' onClick={() => handleCount('reset')}>[: { state.count } :]</span>
          <button data-testid='plus' onClick={() => handleCount('add')}> plus </button>
          <form data-testid='form' onSubmit={(e) => addColor(e, 'add-color')}>
          <input data-testid='input' type='text' value={color} onChange={(e) => setColor(e.target.value)} />
          </form> 
          <span data-testid='reset' onClick={resetColor} style={{'color':'red'}}> {color} </span>
          <div style={{'backgroundColor': color}}>
          {state.colors.map((c, i) => <p data-testid={`color-${i}`} key={i}>{c}</p>)}
          </div>
         
        </>
}

export default BetterCount;