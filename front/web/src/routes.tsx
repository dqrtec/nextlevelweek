import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import CreatePoint from "./CreatePoint";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/cadastrar" />
        </BrowserRouter>
    );
}

export default Routes;