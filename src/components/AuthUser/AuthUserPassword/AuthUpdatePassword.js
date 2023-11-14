import { getAuth, updatePassword } from "firebase/auth";
//configurar la contraseña de un usuario, usando el método updatePassword
const auth = getAuth();

const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

updatePassword(user, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});