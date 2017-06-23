import React from "react";
import { Header, Grid, Form, Button, Dropdown, Icon } from "semantic-ui-react";

import languages from "../data/languages.json";

import "./CodeComposerSettings.css";

export default class CodeComposerSettings extends React.Component {
  static dataRetentionOptions = [
    { key: "60", value: "60", text: "1 hour" },
    { key: "1440", value: "1440", text: "1 day" },
    { key: "10080", value: "10080", text: "1 week" },
    { key: "0", value: "0", text: "Forever" }
  ];

  static getLanguagesForDropdown() {
    return Object.keys(languages).map((key, index) => {
      return { key: index, value: key, text: languages[key] };
    });
  }

  render() {
    return (
      <Form>
        <Grid stackable container className="CodeComposerSettings" columns={2}>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Header as="h4" dividing>Privacy</Header>
              <Form.Field>
                <Dropdown
                  placeholder="Select Data Retention"
                  fluid
                  search
                  selection
                  options={CodeComposerSettings.dataRetentionOptions}
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h4" dividing>Code Properties</Header>
              <Form.Field>
                <Dropdown
                  placeholder="Select Syntax"
                  fluid
                  search
                  selection
                  options={CodeComposerSettings.getLanguagesForDropdown()}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <Button animated primary>
                <Button.Content visible>Submit Paste</Button.Content>
                <Button.Content hidden>
                  <Icon name="right arrow" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}
