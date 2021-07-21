import React, { useState, useRef } from 'react';
import { DEFAULT_TITLE } from './data/constants';

import { Button as StyledButton } from './styled/Button';


const Header = ({ text }) => {
  const [ title, setTitle ] = useState(DEFAULT_TITLE);
  const titleContainer = useRef(null);;

  const setInputTitle = () => {
    setTitle(titleContainer.current.value)
    titleContainer.current.value = '';
  }

  return <header data-testid='header' className="App-header">
          <h1 data-testid='title'> { title } </h1>
            <StyledButton data-testid='title-button' onClick={() => setTitle('New Header')}>Update Header</StyledButton>
        
          <input data-testid='set-title' name='headerTitle' ref={titleContainer} onBlur={setInputTitle} />
        </header>
}

export default Header;