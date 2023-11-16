import React, { useState } from 'react';
import {appFirebase} from '../firebaseConfig/firebaseConfig.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { doc, setDoc, getDocs, getFirestore, updateDoc, collection, query, where } from "firebase/firestore"; 
import { db } from '../firebaseConfig/firebaseConfig.js';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInAnonymously, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import '../register/register.css'

const auth = getAuth(appFirebase);
//const db = getFirestore(appFirebase);

function Registro(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  

  const functAutenticacion = async (e) => {  
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    const confirmarContraseña = e.target['con-password'].value;
    const nombre = e.target.nombre.value;
 
    // Guardar el nombre, correo y contraseña en la base de datos
    try { 
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      const userId = userCredential.user.uid;
 
      // Utiliza setDoc() para agregar el documento al recopilador "Usuarios"
      await setDoc(doc(db, "Usuarios", userId), {
        nombre: nombre,
        email: correo,
        contraseña: contraseña
      });
    } catch (error) {
      console.error("Error al guardar en la base de datos:", error);
      setErrorMessage("Hubo un error inesperado, por favor intente más tarde.");
    }
 };
 
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
          <h2 className='form-title'>Registrate</h2>
        </div>
        <hr className='Line-separator' />
        <form onSubmit={functAutenticacion}>
          <div className='inputBox'>
          <input className='input-field' type='text' placeholder='Nombre' id='nombre'/>

         
          <input className='input-field' type='text' placeholder='E-mail' id='email'/>
                      
          <input className='input-field' type='password' placeholder='Contraseña ' id='password'/>
          
          <input className='input-field' type='password' placeholder='Confirmar contraseña ' id='con-password'/>
          </div>
          <h4 className='form-label'>O ingresa con</h4>

          <div className='botones-inicios'>
            <button onClick={signInWithGoogle} className='signinButton'>
              <FontAwesomeIcon className='icono google' icon={faGoogle} />
              </button>    

            <button onClick={signInWithGithub} className='signinButton'>
            <FontAwesomeIcon className='icono github' icon={faGithub} />
            </button>

            <button onClick={signInAnonimo} className='signinButton'>
             <FontAwesomeIcon className='icono anonimo' icon={faUserSecret} />
            </button>
        </div>

          <div className='div-center'>
          <button className='button-registrar'>REGISTRARSE</button>
          </div>
        </form>
      
        </div>
    </>
    )}
    // Función para obtener el UID de un usuario por su correo electrónico
  const obtenerUidPorCorreo = async (correo) => {
  const usersCollection = db.collection('Usuarios');

  try {
    const querySnapshot = await getDocs(usersCollection.where('email', '==', correo));
    if (!querySnapshot.empty) {
      // usuario con el correo proporcionado
      const usuario = querySnapshot.docs[0].data();
      const uidUsuario = usuario.uid;
      console.log('UID del usuario:', uidUsuario);
    } else {
      console.error('No se encontró ningún usuario con el correo proporcionado');
    }
  } catch (error) {
    console.error('Error al obtener el UID del usuario:', error);
  }
};

// Uso de la función
const correoUsuario = 'correo_del_usuario_a_deshabilitar@example.com';
obtenerUidPorCorreo(correoUsuario);

// Función para deshabilitar un usuario
    const deshabilitarUsuario = async (uid) => {
    const userRef = doc(db, 'Usuarios', uid);

    try {
      // Actualiza el campo 'activo' a false para deshabilitar el usuario
      await updateDoc(userRef, {
        activo: false,
      });

      console.log('Usuario deshabilitado con éxito');
    } catch (error) {
      console.error('Error al deshabilitar el usuario:', error);
    }
  };

  // Uso de la función
  const uidUsuarioADeshabilitar = 'uid_del_usuario_a_deshabilitar';
  deshabilitarUsuario(uidUsuarioADeshabilitar);
    
  
  export {Registro} ;
  export {obtenerUidPorCorreo};
  export {deshabilitarUsuario};
