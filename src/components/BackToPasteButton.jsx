import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

import connectStore from "../connect";

import "./BackToPasteButton.css";

const BackToPasteButton = ({ history, paste }) => (
  <Button
    className="BackToPasteButton"
    icon="left arrow"
    labelPosition="left"
    onClick={() => history.push(`/${paste.hash || ""}`)}
    content={paste.hash ? "Back to Paste" : "Create a new Paste"}
  />
);

BackToPasteButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  paste: PropTypes.shape({
    content: PropTypes.string,
    hash: PropTypes.string,
    language: PropTypes.string
  })
};

BackToPasteButton.defaultProps = {
  paste: {
    content: null,
    hash: null,
    language: null
  }
};

export default connectStore(BackToPasteButton);
