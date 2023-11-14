import { getAuth, updateProfile } from "firebase/auth";
//actualizar información básica del perfil de un usuario (su nombre visible y la URL de su foto de perfil) con el método updateProfile
const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});