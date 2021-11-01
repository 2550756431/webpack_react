
import { render } from "react-dom"
import * as React from "react";
import Login from "./login/index.js";
 class Main extends React.Component {
    render() {
        return (
           <Login></Login>
        )
    }
}

render(<Main /> , document.getElementById("app"))