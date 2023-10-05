import firebase from "../firebase";
const db = firebase.ref("/usuario");

class UsuarioDataServiceDataService{
    get all(){
        return db;
    }

    create(usuario){
        return db.push(usuario)
    }

    update(key, value){
        
    }
}