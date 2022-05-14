import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"

import RatesList from "./components/Rates-list.component";
import EditRates from "./components/edit-Rates.component";
import CreateRates from "./components/create-Rates.component";
import Report from "./components/Report";




function App() {

    return (<Router >
        <div className = "container" >
        <Navbar/ >
        <br/ >
        <Route path = "/main" exact component = { RatesList }/>
        <Route path = "/edit/:id" component = { EditRates }/> 
        <Route path = "/create" component = { CreateRates }/> 
        <Route path = "/Report-print" component = { Report }/> 
       
        </div > 
        </Router>
    );
}

export default App;