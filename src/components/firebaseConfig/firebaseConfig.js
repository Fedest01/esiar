import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//convertir .env a js

const firebaseConfig = {
    apiKey: "AIzaSyBXl8Ul7YBtqh0GD0M_g4-fVQ23L85YItE",
    authDomain: "esiar-fa411.firebaseapp.com",
    projectId: "esiar-fa411",
    storageBucket: "esiar-fa411.appspot.com",
    messagingSenderId: "1086945915467",
    appId: "1:1086945915467:web:0ef8e28e02091e22d453ce",
    measurementId: "G-HKNPYXYJSX"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const analytics = getAnalytics(appFirebase);
const auth = getAuth(appFirebase);

export { appFirebase, db, analytics, auth };
