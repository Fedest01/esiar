import React, { useState } from 'react'
import '../../App.css'
import './login.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import appFirebase from '../../firebase/firebase.config.js'
import { getAuth, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInAnonymously } from 'firebase/auth'
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
          alert ("El correo o la contaseña estan incorrectos");
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

  const signInAnonimo = () => {
    signInAnonymously(auth)
      .then(() => {
        navigate("/Home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

    return (
    <>
    <div className="form-container">
        <h2 className='form-title'>Iniciar Sesion</h2>

        <form onSubmit={functAutenticacion}>

          <input className='input-field' type='text' placeholder='Ingresar email' id='email'/>
                       
          <input className='input-field' type={showPassword ? "text" : "password"} placeholder='Ingresar contraseña ' id='password'/>
          <button
          type="button"
          className="verPassword"
          onClick={togglePasswordVisibility}
          
          ><FontAwesomeIcon icon={faUserSecret} />
          </button>
          <button className='inicio'>Iniciar Sesion</button>
          
        </form>

        <button onClick={signInWithGoogle} className='google-signin-button'>
          <FontAwesomeIcon icon={faGoogle} />
        </button>    

        <button onClick={signInWithGithub} className='google-signin-button'>
          <FontAwesomeIcon icon={faGithub} />
        </button>

        <button onClick={signInAnonimo} className='google-signin-button'>
          <FontAwesomeIcon icon={faUserSecret} />
        </button>

        <h6 className='form'>
            <Link to='/Recuper-Contraseña' className='button'>
             ¿Olvidaste tu contraseña?
            </Link>
        </h6>
        <h4 className='form'> ¿No tienes cuenta?
            <Link to='/Registro' className='button2'>
                Registrate
            </Link>
        </h4>
      </div>
    </>
    );
    }
    export default Login;