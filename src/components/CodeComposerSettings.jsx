import React from "react";
import { Header, Grid, Form, Button, Dropdown, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import languages from "../data/languages.json";

import "./CodeComposerSettings.css";

export default class CodeComposerSettings extends React.Component {
  static dataRetentionOptions = [
    { key: 60, value: 60, text: "1 hour" },
    { key: 1440, value: 1440, text: "1 day" },
    { key: 10080, value: 10080, text: "1 week" },
    { key: 0, value: 0, text: "forever" }
  ];

  static getLanguagesForDropdown() {
    return Object.keys(languages).map((key, index) => {
      return { key: index, value: key, text: languages[key] };
    });
  }

  constructor() {
    super();

    this.state = { language: "javascript", retention: 0 };
  }

  render() {
    const { submitPaste } = this.props;

    return (
      <Grid stackable container className="CodeComposerSettings" columns={2}>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Header as="h4" dividing>Data Retention</Header>
            <Form.Field>
              <Dropdown
                placeholder="Select Data Retention"
                fluid
                search
                selection
                upward
                options={CodeComposerSettings.dataRetentionOptions}
                value={this.state.retention}
                onChange={(ev, data) => {
                  this.setState({ retention: data.value });
                }}
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h4" dividing>Code Syntax</Header>
            <Form.Field>
              <Dropdown
                placeholder="Select Code Syntax"
                fluid
                search
                selection
                upward
                options={CodeComposerSettings.getLanguagesForDropdown()}
                value={this.state.language}
                onChange={(ev, data) => {
                  this.setState({ language: data.value });
                }}
              />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Button
              animated
              primary
              onClick={ev => {
                ev.preventDefault();
                submitPaste(this.state.retention, this.state.language);
              }}
            >
              <Button.Content visible>Submit Paste</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

CodeComposerSettings.propTypes = {
  submitPaste: PropTypes.func.isRequired
};
