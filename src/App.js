import Home from './Home/index.jsx'
import Pothography from '../src/pages/Pothograph/index'
import FashionMen from '../src/pages/FashionMen/index'
import Phone from '../src/pages/Phone/index'
import Nopage from './pages/Nopage/index'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={ <Home />}/>
        <Route path="/Pothography" element={ <Pothography />}/>
        <Route path="/Phone" element={ <Phone />}/>
        <Route path="/FashionMen" element={ <FashionMen />}>
        <Route path="*" element={<Nopage />} />

        </Route>
      </Routes>
    </BrowserRouter>
      
       
        
    
    </div>
  );
}

export default App;
