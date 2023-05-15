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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
          className="App-link"
         href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer"
         >
           Aprende React
         </a>
          </header>
        </div>
      );
     }

export default App;