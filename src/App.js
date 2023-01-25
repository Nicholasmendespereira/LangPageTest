import Pothography from '../src/components/Pothograph/index'
import Home from './Home/index.jsx'
import Nopage from './components/Pothograph/Nopage/index'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={ <Home />}/>
        <Route path="*" element={<Nopage />} />
        <Route path="/Pothography" element={ <Pothography />}>

        </Route>
      </Routes>
    </BrowserRouter>
      
       
        
    
    </div>
  );
}

export default App;
