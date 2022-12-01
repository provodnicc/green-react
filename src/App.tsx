import React, { useState } from 'react';

import './App.css';
import './fonts/fonts.css'

import { Header } from './components/header/header';

import { HeaderLink } from './enums/header.enum';


function App() {

  return (

    <div className="App">
      
      <Header active={HeaderLink.Home}/>
      
      
    </div>
  );
}

export default App;
