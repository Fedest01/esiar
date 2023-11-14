import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;
//Obtén el usuario con sesión activa con currentUser, donde si no accedio nadie , el valor de currentUser es nulo.
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  // ...
} else {
  // No user is signed in.
}