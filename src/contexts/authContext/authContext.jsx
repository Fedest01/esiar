import {auth} from "../../components/firebaseConfig/firebaseConfig"
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    GithubAuthProvider,
signOut,
 } from "firebase/auth";
import { createContext, useContext } from "react"
// permite acceder al contexto de autenticación en tus componentes de React.

export const authContext = createContext()
// este hook  busca el contexto de autenticacion y lo devuelvwe, si el contexto no existe, da error
export const useAuth = () => {
    const context = useContext(authContext)
    if(!context){
    console.log("error, no creaste el contexto")

    }
    return context;
};

//componente para globalizar el contexto y compartir info entre componenetes
export function AuthProvider({ children }){

//funcion para controlar registro
const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    console.log(response);
};

//funcion para controlar sesion ya iniciada
const login = async (email, password)=>{
    const response = await signInWithEmailAndPassword(auth, email, password)
console.log(response)
}

//funcion para controlar iniciar sesion con google
const loginWithGoogle = async () =>{
    const responseGoogle = new GoogleAuthProvider()
    return await signInWithPopup(auth, responseGoogle)
}

//funcion para controlar iniciar sesion con Git Hub
const loginWithGitHub = async () =>{
    const responseGitHub = new GithubAuthProvider()
    return await signInWithPopup(auth, responseGitHub)
}

//funcion para controlar cerrar sesion
const logout = async () =>{
    const response = await signOut(auth)
    console.log(response)
}




    return <authContext.Provider value={(
        register,
        login,
        loginWithGoogle,
        loginWithGitHub,
        logout )}
        > 
        {children} </authContext.Provider>
    }