import Aux from "./hoc/AuxHoc";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import FinalExpenses from "./components/Expenses/FinalExpenses";
import LoginContainer from "./components/FormContainer/LoginContainer/LoginContainer";
import Registration from "./components/FormContainer/RegistrationContainer/RegistrationContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Aux>
        <Switch>
          <Route path="/" exact component={InitialScreen} />
          <Route path="/expense" component={FinalExpenses} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Aux>
    </Router>
  );
}

export default App;
