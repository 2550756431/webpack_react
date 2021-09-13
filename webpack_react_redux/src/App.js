import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {
  num_increment,
  num_decrement
} from "./actions/index";
import {
  Button
} from "antd"
import React, { Component } from 'react'
 class App extends Component {
  render() {
    console.log(this.props,"propsprops");
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>asdfasdf</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.loginReducer,
    dataState: state.dataReducer
  }
}

const mapDispathToProps = () => {
  return {
    num_increment,
    num_decrement
  }
}
export default connect(mapStateToProps, mapDispathToProps)(App);
