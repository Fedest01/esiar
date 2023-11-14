import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//si se quiere crear una cuenta nueva, pasa la dirección de correo electrónico y la contraseña del usuario nuevo a createUserWithEmailAndPassword
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });