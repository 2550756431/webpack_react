
import { render } from "react-dom"
import * as React from "react";
import ManageRole from "./manageRole/index.js";
 class MainManageRole extends React.Component {
    render() {
        return (
           <ManageRole></ManageRole>
        )
    }
}

render(<MainManageRole /> , document.getElementById("app"))