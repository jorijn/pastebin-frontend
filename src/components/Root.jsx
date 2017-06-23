import React from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";

import ComposeView from "./ComposeView";
import DisplayView from "./DisplayView";

const Root = ({ store }) => (
  <Provider store={store}>

    <Switch>
      <Route path="/" exact component={ComposeView} />
      <Route path="/:pasteId" component={DisplayView} />
    </Switch>

  </Provider>
);

export default Root;
