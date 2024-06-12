import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies/Currencies";
import Main from "./pages/Main/Main";
import Price from "./pages/Price/Price";
import Nav from "./components/Nav/Nav";
import './App.css';
import Header from "./components/Header/Header";




function App() {
  

  return (
    <>
        <div className="App">
        
          <Nav/>
          
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/prices" element={<Price/>}/>
        <Route path="/price/:symbol" element={<Price/>}/> 
      </Routes>
    </div>
      
    </>
  )
}

export default App
