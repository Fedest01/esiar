import React from 'react'; // Asegúrate de importar React
import './App.css';
import { Registro } from './components/register/register';
import { useState, useEffect } from 'react';
import { Login } from './components/Login/login'


function App() {
  return (
    
      <div className='app'>
        <h1>Esiar</h1>
        <Registro />
      </div>
    
  );
}

export default App;
