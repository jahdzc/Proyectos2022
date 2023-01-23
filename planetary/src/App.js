import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cover from "./components/Cover/Cover";
import Planet from "./components/Planet/Planet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/neptune">
          <Planet namePlanet="neptune"/>
        </Route>
        <Route path="/uranus">
          <Planet namePlanet="uranus"/>
        </Route>
        <Route path="/saturn">
          <Planet namePlanet="saturn"/>
        </Route>
        <Route path="/jupiter">
          <Planet namePlanet="jupiter"/>
        </Route>
        <Route path="/mars">
          <Planet namePlanet="mars"/>
        </Route>
        <Route path="/earth">
          <Planet namePlanet="earth"/>
        </Route>
        <Route path="/venus">
          <Planet namePlanet="venus"/>
        </Route>
        <Route path="/mercury">
          <Planet namePlanet="mercury"/>
        </Route>
        <Route path="/" exact>
          <Cover />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
