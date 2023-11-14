import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//si un usuario inicia sesion en la app, pasa la dirección de correo electrónico y la contraseña a signInWithEmailAndPassword
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });