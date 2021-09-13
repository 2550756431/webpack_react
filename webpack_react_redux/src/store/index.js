import { combineReducers, createStore, applyMiddleware } from "redux";
import dataReducer from "../reducer/dataReducer";
import loginReducer from "../reducer/loginReducer";
import thunKMiddleware from "redux-thunk";

const store = createStore(combineReducers({ dataReducer, loginReducer }), applyMiddleware(thunKMiddleware));
export default store;