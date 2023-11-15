import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import appFirebase from '../firebaseConfig/firebaseConfig';
import { doc, setDoc, getDocs, collection, query, where, getFirestore } from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'


function Login(props) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
  
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  // constante de autenticacion de correo, nombre y contrasena
    const functAutenticacion = async (e) =>{  
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
         
          try {
            await signInWithEmailAndPassword(auth, correo, contraseña);
            navigate("/Home");
            console.log("Iniciado sesion con exito")
          } catch (error) {
            alert ("El correo electronico es incorrecto");
          }
        
    }
}
// Constante para iniciar sesion con google
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

// Constante para iniciar sesion con github
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
// Constante para iniciar sesion con anonimo
  const signInAnonimo = () => {
    signInAnonimo(auth)
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

        <button onClick={signInAnonimo} className='google-signin-button'>
          <FontAwesomeIcon icon={faUserSecret} />
          <span>Iniciar sesión en anonimo</span>
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

  export default Login;

