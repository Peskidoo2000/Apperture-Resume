import React from "react";
import "././index.css";
import {Link} from "react-router-dom";

function Aside() {
  return (
   <aside className="parent-aside">
      <Link to="/" className="aside-link"> Home</Link> 
      <Link to="/template" className="aside-link pre"> Templates</Link>
      <Link to="/features" className="aside-link pre"> Features</Link> 
      <Link to="/pricing" className="aside-link pre">Princing</Link>
      <Link to="/about" className="aside-link pre"> About </Link>
    </aside>
   
  );
}

export default Aside;
