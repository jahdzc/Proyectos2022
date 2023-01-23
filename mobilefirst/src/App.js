import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Principal from './components/Principal/Principal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>}/>
      </Routes>
    </Router>
  );
}

export default App;
