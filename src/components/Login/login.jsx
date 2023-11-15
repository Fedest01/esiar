import React, { useState } from 'react'
import Label from '../label/label.jsx'
import '../../App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../home/home.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../nav/nav.jsx';
import appFirebase from '../../firebase/firebaseConfig.js'
import { getAuth, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const auth = getAuth(appFirebase);


function Login(props) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const functAutenticacion = async (e) =>{  
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.password.value;
       
        try {
          await signInWithEmailAndPassword(auth, correo, contraseña);
          navigate("/Home");
          console.log("Iniciado sesion con exito!!")
        } catch (error) {
          alert ("El correo es incorrecto");
        }
      
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);  // Puedes acceder a la información del usuario aquí
        navigate("/Home");
      }).catch((error) => {
        console.log(error.message);
      });
  };
  
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);  // Puedes acceder a la información del usuario aquí
        navigate("/Home");
      }).catch((error) => {
        console.log(error.message);
      });
  };

    return (
    <>
    <div className="form-container">
        <h2 className='form-title'>Iniciar Sesion</h2>

        <form onSubmit={functAutenticacion}>

          <Label className="info-label" infoLabel="Ingrese email"/>
          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                       
          <Label className="info-label" infoLabel="Ingrese contraseña"/>
          <input className='input-field' type={showPassword ? "text" : "password"} placeholder='Ingresar contraseña ' id='password'/>
          <button
          type="button"
          className="verPassword"
          onClick={togglePasswordVisibility}
          >
            c
          </button>
          <button className='button'>Inicia Sesion</button>
          
        </form>

        <button onClick={signInWithGoogle} className='google-signin-button'>
          <FontAwesomeIcon icon={faGoogle} />
          <span>Iniciar sesión con Google</span>
        </button>    

        <button onClick={signInWithGithub} className='google-signin-button'>
          <FontAwesomeIcon icon={faGithub} />
          <span>Iniciar sesión con GitHub</span>
        </button>

        <h6 className='form-title'>
            <Link to='/Recuper-Contraseña' className='button'>
             ¿Olvidaste tu contraseña?
            </Link>
        </h6>
        <h4 className='form-title'> ¿No tienes cuenta?
            <Link to='/Registro' className='button'>
                Registrate
            </Link>
        </h4>
      </div>
    </>
    );
    }
    export default Login;