import './App.css';
import {Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Privacy} from './pages/Privacy';
import {Login} from './pages/Login';
import { Profile } from './pages/Profile';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/login" element={<Login/>} />
        <Route path = "/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;