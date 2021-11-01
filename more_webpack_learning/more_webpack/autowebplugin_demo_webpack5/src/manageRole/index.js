import {
    HashRouter, Route, Switch
} from "react-router-dom";
import * as React from "react";
import Manage from "./Manage/index.js";

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