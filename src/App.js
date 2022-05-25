import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Cabinets from "./Compo/Cabinets";
import ControlCabinets from "./Compo/ControlCabinets";
import Footer from "./Compo/Footer";
 
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Cabinets />} /> 
           <Route path="/Cabinets" element={<Cabinets />} /> 
           <Route path="/controlCabinets" element={<ControlCabinets />}/> 
         </Routes>
         <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
