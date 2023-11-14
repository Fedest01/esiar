import { getAuth, onAuthStateChanged } from "firebase/auth";
//Si el método signInAnonymously se completa sin errores, se activará onAuthStateChanged y se podra obtener los datos de la cuenta del usuario anónimo del objeto User
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});