import Aux from "./hoc/AuxHoc";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import FinalExpenses from "./components/Expenses/FinalExpenses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Aux>
        <Switch>
          <Route path="/" exact component={InitialScreen} />
          <Route path="/expense" component={FinalExpenses} />
        </Switch>
      </Aux>
    </Router>
  );
}

export default App;
