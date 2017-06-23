import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/styles";

import connectStore from "../connect";
import "./DisplayView.css";

class DisplayView extends React.Component {
  constructor() {
    super();

    this.state = { loading: false };
  }

  render() {
    return (
      <Grid className="DisplayView" container stretched centered>
        <Grid.Row>
          <Grid.Column>
            <Segment piled loading={this.state.loading}>
              <SyntaxHighlighter
                showLineNumbers
                language={this.props.paste.language}
                style={github}
              >
                {this.props.paste.content}
              </SyntaxHighlighter>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connectStore(DisplayView);
