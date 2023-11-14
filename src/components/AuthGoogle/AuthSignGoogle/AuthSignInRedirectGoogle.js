import { getAuth, signInWithRedirect } from "firebase/auth";
//el redireccionamiento a la página de acceso, llama a signInWithRedirect
const auth = getAuth();
signInWithRedirect(auth, provider);