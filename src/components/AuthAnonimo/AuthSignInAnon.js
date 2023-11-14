import { getAuth, signInAnonymously } from "firebase/auth";
//cuando un usuario quiere acceder de forma anonima se llama a signInAnonymously
const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });