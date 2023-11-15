import React from 'react'; // Asegúrate de importar React

import { AuthProvider } from './contexts/authContext/authContext';
import { Registro } from './components/Agregar-usuario/Agregar-usuario';

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <h1>Esiar</h1>
        <Registro />
      </div>
    </AuthProvider>
  );
}

export default App;