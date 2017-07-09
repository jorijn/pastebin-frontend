import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import pastePostSaga from "./sagas/paste";

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();
const defaultState = {
  alerts: [],
  paste: { language: null, content: null, hash: null }
};
const middlewareForRedux = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(...middlewareForRedux))
);

// then run the saga
sagaMiddleware.run(pastePostSaga);

export default store;
