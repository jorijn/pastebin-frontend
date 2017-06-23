import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import paste from "./paste";

const rootReducer = combineReducers({ paste, router: routerReducer });

export default rootReducer;
