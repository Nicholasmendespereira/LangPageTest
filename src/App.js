import Home from './Home/index.jsx'
import Pothography from '../src/components/Pothograph/index'
import FashionMen from '../src/components/FashionMen/index'
import Nopage from './components/Nopage/index'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={ <Home />}/>
        <Route path="/Pothography" element={ <Pothography />}/>
        <Route path="/FashionMen" element={ <FashionMen />}>
        <Route path="*" element={<Nopage />} />

        </Route>
      </Routes>
    </BrowserRouter>
      
       
        
    
    </div>
  );
}

export default App;
