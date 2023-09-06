import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark custom-nav">
     
               <div className="container-fluid">
          
                <Link className="navbar-brand" to="/">
                    
                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item" to="/">
                        <Link className="nav-link" to="/home">
                        </Link>
                        </li>
                        <li className="nav-item" to="/">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                        </li>
                        <li className="nav-item " to="/">
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                        </li>
                       
                    </ul>
                   
                    <Link className ="btn btn-primary mx-1" to="/signup">
                      Signup
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar;