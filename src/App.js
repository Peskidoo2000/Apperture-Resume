import React, {useEffect} from "react";
import { BrowserRouter as Router,  Routes, Route, useLocation } from 'react-router-dom';
import Aside from "./Aside";
import About from "./About";
import Template from "./Template";
import Features from "./Features";
import Pricing from "./Pricing";
import Home from "./Home";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import './index.css';

function App() {
  return (
    <Router>
      <Main/>
    </Router>

  );
}
 const Main = ()=> {
  const location = useLocation()
  useEffect(() => {
    const offcanvasElement = document.getElementById('offcanvas');
    const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);

    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }, [location]);
  return (
    <div className="App"> 
      <header className=" navbar navbar-expand-md bg-dark sticky-top border-bottom App-header">
      <MyLocationIcon className="ai-icon1"/> 
      <span className="appeture"> Appeture_Resume</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <ViewHeadlineIcon className="toggler-icon "/>
    </button>
    <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
    <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 justify-content-between">
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <Aside/>         
        </ul>
      </div>
    </div>
      </header>     
 
 
     <main>
          <Routes>
            <Route path="/" data-bs-dismiss="offcanvas"  element={<Home/>} />
            <Route path="/about" data-bs-dismiss="offcanvas" element={<About/>} />
            <Route path="/template" data-bs-dismiss="offcanvas" element={<Template/>} />
            <Route path="/pricing" data-bs-dismiss="offcanvas" element={<Pricing/>} />
            <Route path="/Features" data-bs-dismiss="offcanvas" element={<Features/>} />
          </Routes>
     </main>
 
     
</div>   
     
  );
}

export default App;

