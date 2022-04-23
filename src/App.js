import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Landing} from './pages/Landing';
import {Privacy} from './pages/Privacy';
import {Login} from './pages/Login';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
