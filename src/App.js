import Aux from "./hoc/AuxHoc";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import FinalExpenses from "./components/Expenses/FinalExpenses";
import FormContainer from "./components/FormContainer/FormContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Aux>
        <Switch>
          <Route path="/" exact component={InitialScreen} />
          <Route path="/expense" component={FinalExpenses} />
          <Route path="/login" component={FormContainer} />
        </Switch>
      </Aux>
    </Router>
  );
}

export default App;
