import { GithubAuthProvider } from "firebase/auth";
// Una vez que un usuario acceda correctamente con GitHub, intercambia el token de acceso de OAuth 2.0 por una credencial de Firebase
const credential = GithubAuthProvider.credential(token);