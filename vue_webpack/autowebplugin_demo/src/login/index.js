import {
    HashRouter, Route, Switch
} from "react-router-dom";
import { render } from "react-dom"
import * as React from "react";
import UserLogin from "./UserLogin/index.js";
import Home from "./Home/index.js"
 class Login extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/UserLogin" component={UserLogin} />
                    <Route path="/Home" component={Home}  />
                </Switch>
            </HashRouter>
        )
    }
}

render(<Login></Login> , document.getElementById("app"))