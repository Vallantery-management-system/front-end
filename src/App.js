import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';
import { ForgotPassw } from './pages/ForgotPassw';
import { ResetPassword } from "./pages/ResetPassword";
import { Landing } from './pages/Landing';
import { VolProfile } from './pages/VolProfile';
import { Company } from './pages/company';

export function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/home" >
            <Home />
          </Route>
          <Route exact path="/">
              <Landing />
          </Route>
          <Route path = "/profile">
              <VolProfile />
          </Route>
          <Route path="/privacy">
              <Privacy />
          </Route>
          <Route path="/login">
              <Login />
          </Route>   
          <Route path = '/company'>
              <Company />
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
    </div>
  );
}

export default App;
