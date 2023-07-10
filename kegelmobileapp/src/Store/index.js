import {applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import rootReducers from "./reducer";

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;