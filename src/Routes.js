import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import AnotherRoute from './AnotherRoute';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/anotherroute" component={AnotherRoute} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;