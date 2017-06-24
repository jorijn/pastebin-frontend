import React from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import ComposeView from "./ComposeView";
import DisplayView from "./DisplayView";
import NetlifyBadge from "./NetlifyBadge";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route path="/" exact component={ComposeView} />
        <Route path="/:pasteId" component={DisplayView} />
      </Switch>
      <NetlifyBadge />
    </div>

  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired
};

export default Root;
