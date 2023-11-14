import { getAuth, signOut } from "firebase/auth";
// si un usuario sale de la sesion de github , se llama a signOut

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});