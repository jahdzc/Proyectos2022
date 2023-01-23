import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import FrontPage from "./components/FrontPage/FrontPage";
import Projects from "./components/Projects/Projects";
import Team from "./components/Team/Team";
import AboutUs from "./components/AboutUs/AboutUs";
import Workshops from "./components/Workshop/Workshop";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/workshops">
            <Workshops />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/" exact>
            <FrontPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
