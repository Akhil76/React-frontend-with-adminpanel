import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Adminnavigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			  <div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
				  <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
				</button>
				<Link className="navbar-brand" to="/admin">Adminpanel</Link>
				<div>
					<Link to="/" className="btn btn-outline-success text-white" type="submit">View site</Link>
					<Link className="btn btn-outline-success text-white" type="submit">Logout</Link>
            	</div>
			  </div>
			  
			 
		</nav>
         
    );
};
   
export default Adminnavigation;