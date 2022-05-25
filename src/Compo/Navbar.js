 import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
         <div className='row d-grid gridStyle'>
          <div className='navBackground col-sm-12 col-md-6 col-lg-6 row'>
                <div className="nav-item d-flex col-4">
                  <Link className="nav-link" to="">Home</Link>
                </div>
                <div className="nav-item d-flex col-4">
                  <Link  to="/Cabinets" className="nav-link" >Cabinets</Link>
                </div>
                <div className="nav-item d-flex col-4">
                  <Link to="/controlCabinets" className="nav-link">Control</Link>
                </div> 
 
        </div>
         </div>
    )
}

export default Navbar
