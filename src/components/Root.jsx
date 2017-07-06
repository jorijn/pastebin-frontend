import React from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import Footer from "./Footer";
import ComposeView from "./ComposeView";
import DisplayView from "./DisplayView";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route path="/" exact component={ComposeView} />
        <Route path="/about" exact component={About} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/:hash" component={DisplayView} />
      </Switch>
      <Footer />
    </div>

  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape().isRequired
};

export default Root;
