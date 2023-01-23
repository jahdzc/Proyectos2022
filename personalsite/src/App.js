import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Portada from './components/Portada/Portada';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Portada/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
