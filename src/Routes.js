import React from "react";
import Dashboard from "./module/container/Dashboard";
import { Route, BrowserRouter } from "react-router-dom";
import About from "./module/components/About";

const Routes = () => {
    return (
        <BrowserRouter>
            <Dashboard />
            <Route exact path="/home" />
            <Route exact path="/research" />
            <Route exact path="/aboutus" component={About} />
        </BrowserRouter>
    )
}

export default Routes;