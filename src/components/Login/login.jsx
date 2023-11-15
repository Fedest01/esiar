import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import appFirebase from '../firebaseConfig/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
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
            console.log("Iniciado sesion con exito")
          } catch (error) {
            alert ("El correo electronico es incorrecto");
          }
        
    }
  
