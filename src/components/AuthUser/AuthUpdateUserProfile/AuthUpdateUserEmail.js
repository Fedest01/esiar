import { getAuth, updateEmail } from "firebase/auth";
//configurar la dirección de correo electrónico de un usuario con el método updateEmail
const auth = getAuth();
updateEmail(auth.currentUser, "user@example.com").then(() => {
  // Email updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});