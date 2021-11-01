import * as React from "react";
import {
    HashRouter, Route, Switch
} from "react-router-dom";
import UserLogin from "./UserLogin/index.js";
import Home from "./Home/index.js" 
export default class Login extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/UserLogin" component={UserLogin} />
                    <Route path="/Home" component={Home} />
                </Switch>
            </HashRouter>
        )
    }
}