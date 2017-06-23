/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// application styling
import "semantic-ui-css/semantic.min.css";

// local imports
import Root from "./components/Root";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

// render the app to the root node
render(
  <BrowserRouter><Root store={store} /></BrowserRouter>,
  document.getElementById("root")
);

// register the react service worker
registerServiceWorker();
