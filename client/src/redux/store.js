import {createStore,applyMiddleware} from "redux";
import {combineReducers} from "redux";
import { todoreducer } from "./reducer/todosReducer";
import thunk from "redux-thunk";

const rootb = combineReducers(
    {todoreducer}
)

const store=createStore(rootb,applyMiddleware(thunk))

export default store;