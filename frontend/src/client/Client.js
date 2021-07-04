import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';

const Client = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Navigation/>
                    <switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Client/Blog' component={Blog} />
                        <Route exact path='/Client/About' component={About} />
                    </switch>
                <Footer/>
            </div>
        </BrowserRouter> 
    );
};
   


export default Client;