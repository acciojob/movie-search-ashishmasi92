import { createStore } from "redux";
import apiReducer from "./reducer/apiReducer.js";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";


const store = createStore(apiReducer,applyMiddleware(thunk))

export default store