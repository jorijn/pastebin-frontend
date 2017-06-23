import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import connectStore from "../connect";
import CodeComposer from "./CodeComposer";
import CodeComposerSettings from "./CodeComposerSettings";
import "./ComposeView.css";

class ComposeView extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <Grid className="ComposeView" container stretched centered>
        <Grid.Row>
          <Grid.Column>
            <Segment piled loading={this.state.loading}>
              <CodeComposer />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CodeComposerSettings />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connectStore(ComposeView);
