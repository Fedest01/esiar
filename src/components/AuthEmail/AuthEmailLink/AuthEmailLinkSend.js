import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
//Envía el vínculo de autenticación al correo electrónico del usuario y se guarda su correo en caso de que este complete el acceso con correo electrónico en el mismo dispositivo.
const auth = getAuth();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });