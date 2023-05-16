import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCvIh1gzMUbdTybOaNC60sJlisPRUqrFEA",
    authDomain: "esiar-f601e.firebaseapp.com",
    projectId: "esiar-f601e",
    storageBucket: "esiar-f601e.appspot.com",
    messagingSenderId: "373460662675",
    appId: "1:373460662675:web:bdd82d7e0aad5711021066",
    measurementId: "G-BKSD2CT2YD"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <>
      <FormLogin/>
      
    </>
  );
}

export default App;
