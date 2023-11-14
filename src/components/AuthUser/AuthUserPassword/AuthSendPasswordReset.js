import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//enviar un correo electrónico de restablecimiento de contraseña a un usuario, usando el método sendPasswordResetEmail
const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });