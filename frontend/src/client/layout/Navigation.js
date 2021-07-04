import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Myblogsite</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li classclassName="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li classclassName="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/Client/Blog">Blog</Link>
                </li>
                <li classclassName="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/Client/About">About</Link>
                </li>
                
              </ul>
              
            </div>
            <div>
                <button className="btn btn-outline-success text-white" type="submit">Facebook</button>
                <button className="btn btn-outline-success text-white" type="submit">Twitter</button>
            </div>
        </div>
    </nav>
         
    );
};
   


export default Navigation;