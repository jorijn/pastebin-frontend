/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render } from "react-dom";

// local imports
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// render the app to the root node
render(<App />, document.getElementById("root"));

// register the react service worker
registerServiceWorker();
