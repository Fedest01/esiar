import React, { useState } from 'react';
import appFirebase from '../firebaseConfig/firebaseConfig.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInAnonymously, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import '../register/register.css'
const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

function Registro(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  

  const functAutenticacion = async (e) =>{  
     e.preventDefault();
     const correo = e.target.email.value;
     const contraseña = e.target.password.value;
     const confirmarContraseña = e.target['con-password'].value;
     const nombre = e.target.nombre.value;
 
     // Guardar el nombre, correo y contraseña en la base de datos
     try{ 
       const userCredential = await createUserWithEmailAndPassword (auth, correo, contraseña);
       await setDoc(doc(db, "Usuarios", userCredential.user.uid), {
         nombre: nombre,
         email: correo,
         contraseña: contraseña
       });
     }catch (error) {
       console.error("Error al guardar en la base de datos:", error);
       setErrorMessage("Hubo un error inesperado, por favor intente más tarde.");
  }
 }
 
 // Constante para iniciar sesion con google
 const signInWithGoogle = () => {
   const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
          // Puedes acceder a la información del usuario aquí
      }).catch((error) => {
        console.log(error.message);
      });
    }

  // Constante para iniciar sesion con github
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user); 
       // Puedes acceder a la información del usuario aquí
      }).catch((error) => {
        console.log(error.message);
      });
  };

// Constante para iniciar sesion como anonimo
const signInAnonimo = () => {
  signInAnonymously(auth)
    .then(() => {
     
    })
    .catch((error) => {
      console.error(error);
      });
  };

  return (
    <>
      <div className="form-container">
        <div className='div-center'>
          <h2 className='form-title'>Registrarse</h2>
        </div>
        <hr className='Line-separator' />
        <form onSubmit={functAutenticacion}>
          <div className='inputBlock'>
          <div><input className='input-field inputMitad' type='text' placeholder='Nombre' id='nombre'/></div>
    
          </div>
          <input className='input-field' type='text' placeholder='E-mail' id='email'/>
                      
          <input className='input-field' type='password' placeholder='Contraseña ' id='password'/>
          
          <input className='input-field' type='password' placeholder='Confirmar contraseña ' id='con-password'/>
        
        
          <button onClick={signInWithGoogle} className='google-signin-button'>
          <FontAwesomeIcon icon={faGoogle} />
        </button>    

        <button onClick={signInWithGithub} className='google-signin-button'>
          <FontAwesomeIcon icon={faGithub} />
        </button>

        <button onClick={signInAnonimo} className='google-signin-button'>
          <FontAwesomeIcon icon={faUserSecret} />
        </button>

          <div className='div-center'>
          <button className='button'>Registrarse</button>
          </div>
        </form>
      
        </div>
    </>
    )}
    
    export {Registro} ;
