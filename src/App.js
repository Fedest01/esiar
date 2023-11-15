import React from 'react'; // Asegúrate de importar React

import { AuthProvider } from './contexts/authContext/authContext';
import { Registro } from './components/agregarUsuario/agregarUsuario';
import { formulario } from './components/formulario/formulario';

function App() {
  return (
    <AuthProvider>
      <div className='app'>
       <h2 class="titulo">Esi<span class="tituloDos">AR</span></h2>
       <h2 class="eslogan">Descubre mas sobre la Educacion Sexual Integral</h2>
          
          <formulario />
      </div>
    </AuthProvider>
  );
}

export default App;
