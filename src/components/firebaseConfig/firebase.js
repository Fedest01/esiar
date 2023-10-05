import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//convertir .env a js

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APP_KEY,
    authDomain: "esiar-fa411.firebaseapp.com",
    projectId: "esiar-fa411",
    storageBucket: "esiar-fa411.appspot.com",
    messagingSenderId: "1086945915467",
    appId: "1:1086945915467:web:0ef8e28e02091e22d453ce",
    measurementId: "G-HKNPYXYJSX"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);