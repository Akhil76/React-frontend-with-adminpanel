import React from "react";
import {Link, NavLink} from 'react-router-dom';

const AdminSidebar = () => {
    return(
        <div className="offcanvas offcanvas-start side_navbar bg-dark text-white" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
				<div className="">
					<div className="admin_pic_area"> 
						<img className="admin_pic" src="img/Linkdmin.jpg"/>
						<h5>Admin</h5> 
						<p>A.K Paul</p>
					</div>
				</div>
				  <div className="offcanvas-body">
					<div className="list-group">
						<Link to="/Admin" className="side_bar_btn list-group-item text-white btn-success">Dashboard</Link>
						<Link to="/Admin/Allpost" className="side_bar_btn list-group-item text-white btn-success">All Post</Link>
						<Link to="/Admin/Createpost" className="side_bar_btn list-group-item text-white btn-success">Create Post</Link>
						<Link to="/Admin/Editpost" className="side_bar_btn list-group-item text-white btn-success">Edit Post</Link>
						<Link to="/Admin/Deletepost" className="side_bar_btn list-group-item text-white btn-success">Delete Post</Link>
						<Link to="#" className="side_bar_btn list-group-item text-white btn-success">Pages</Link>
						<Link to="#" className="side_bar_btn list-group-item text-white btn-success">Recent Posts</Link>
					</div>
					<div className="dropdown mt-3">
					  <button className="btn btn-secondary" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
						Dropdown button
					  </button>
					  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<li><Link className="dropdown-item" to="#">Action</Link></li>
						<li><Link className="dropdown-item" to="#">Another action</Link></li>
						<li><Link className="dropdown-item" to="#">Something else here</Link></li>
					  </ul>
					</div>
				  </div>
		</div>
        
    );
};
   


export default AdminSidebar;