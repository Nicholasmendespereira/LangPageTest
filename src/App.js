import Pothography from '../src/components/Pothograph/index'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Pothography/>
      </Router>
    </div>
  );
}

export default App;
