
import './App.css';
import { AuthProvider} from "./contexts/authContext/authContext";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <AuthProvider>
    <div className='app'>
        <h1>Esiar</h1>
    </div>
    </AuthProvider>
  );
}

export default App;
