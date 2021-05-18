import Aux from "./hoc/AuxHoc";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import FinalExpenses from "./components/Expenses/FinalExpenses";
import LoginContainer from "./components/FormContainer/LoginContainer/LoginContainer";
import Registration from "./components/FormContainer/RegistrationContainer/RegistrationContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Aux>
        <Switch>
          <Route path="/" exact component={InitialScreen} />
          {authCtx.isLoggedIn && (
            <Route path="/expense">
              <FinalExpenses />
            </Route>
          )}
          <Route path="/login" component={LoginContainer} />
          <Route path="/registration" component={Registration} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Aux>
    </Router>
  );
}

export default App;
