import * as React from "react";
import {
    HashRouter, Route, Switch
} from "react-router-dom";
import Manage from "./Manage";
export default class ManageRole extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/Manage" component={Manage} />
                </Switch>
            </HashRouter>
        )
    }
}