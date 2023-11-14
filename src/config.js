import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

//const firebaseConfig = {
//FIREBASE_CONFIGURATION
//};

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBXl8Ul7YBtqh0GD0M_g4-fVQ23L85YItE",
    authDomain: "esiar-fa411.firebaseapp.com",
    projectId: "esiar-fa411",
    storageBucket: "esiar-fa411.appspot.com",
    messagingSenderId: "1086945915467",
    appId: "1:1086945915467:web:0ef8e28e02091e22d453ce",
    measurementId: "G-HKNPYXYJSX"
});


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();