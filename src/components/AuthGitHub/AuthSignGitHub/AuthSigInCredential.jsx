import { getAuth, signInWithCredential } from "firebase/auth";
// se usa la credencial de Firebase para autenticar con Firebase
// Sign in with the credential from the user.
const auth = getAuth();
signInWithCredential(auth, credential)
  .then((result) => {
    // Signed in 
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // ...
  });