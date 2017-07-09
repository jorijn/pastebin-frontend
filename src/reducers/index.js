import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import paste from "./paste";
import alerts from "./alerts";

const rootReducer = combineReducers({ paste, alerts, router: routerReducer });

export default rootReducer;
