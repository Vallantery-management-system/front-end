import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { SignUp } from './pages/Signup';

export function App() {
  return (
    <div className="App">
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
    </Switch>
    </div>
  );
}

export default App;