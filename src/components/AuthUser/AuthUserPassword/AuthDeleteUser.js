import { getAuth, deleteUser } from "firebase/auth";
//borrar una cuenta de usuario, usando el método delete
const auth = getAuth();
const user = auth.currentUser;

deleteUser(user).then(() => {
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});