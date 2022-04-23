<<<<<<< HEAD
import logo from './logo.svg';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import {Home} from './pages/Home';
import {Landing} from './pages/Landing';
import {Privacy} from './pages/Privacy';
import {Login} from './pages/Login';
=======
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/Signup';
import { ForgotPassw } from './pages/ForgotPassw';
import {ResetPassword} from "./pages/ResetPassword";
>>>>>>> 859622600dfc5c45b5ebc4fb039812ae1bd85c96

export function App() {
  return (
    <div className="App">
<<<<<<< HEAD
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
=======
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/privacy">
            <Privacy />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/profile">
            <Profile/>
        </Route>
        <Route path="/signup">
            <SignUp/>
        </Route>
        <Route path="/forgot">
            <ForgotPassw/>
        </Route>
        <Route path="/reset">
            <ResetPassword/>
        </Route>
    </Switch>
>>>>>>> 859622600dfc5c45b5ebc4fb039812ae1bd85c96
    </div>
  );
}

export default App;
