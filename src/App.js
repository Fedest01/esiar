import React from 'react'; // Asegúrate de importar React
import './App.css'
import { Registro } from './components/register/register';
import { useState, useEffect } from 'react';



function App() {
  return (
    
      <div className='app'>
        <h1 className='titulo'>Esi<span className='tituloDos'>AR</span></h1>
        <h2 className='eslogan'>Descubre mas sobre la Educacion Sexual Integral</h2>
        <Registro />
      </div>
    
  );
}

export default App;
