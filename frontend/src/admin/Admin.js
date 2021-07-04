import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Allpost from './pages/Allpost';
import Createpost from './pages/Createpost';
import Editpost from './pages/Editpost';
import Deletepost from './pages/Deletepost';
import Adminnavigation from "./layout/Adminnavigation";
import AdminSidebar from "./layout/AdminSidebar";


const Admin = () => {
    return(
        <BrowserRouter>
        <div>
            <Adminnavigation/>
            <div className="">
            <AdminSidebar/>
            
                <switch>
                    <Route exact path='/Admin/Allpost' component={Allpost} /> 
                    <Route exact path='/Admin/Createpost' component={Createpost} />
                    <Route exact path='/Admin/Editpost' component={Editpost} /> 
                    <Route exact path='/Admin/Deletepost' component={Deletepost} /> 
                    <Route exact path='/Admin' component={Dashboard} />
                </switch>
            </div>
            
        </div>
        </BrowserRouter>  
    );
};
   


export default Admin;