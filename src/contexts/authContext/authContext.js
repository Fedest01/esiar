import {auth} from "../../components/firebaseConfig/firebaseConfig"
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