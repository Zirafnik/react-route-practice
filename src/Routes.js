import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Profile from "./Profile";
import AnotherRoute from './AnotherRoute';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/anotherroute" component={AnotherRoute} />
        </Switch>
    );
}

export default Routes;