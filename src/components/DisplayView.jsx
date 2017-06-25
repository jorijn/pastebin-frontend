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

    this.setLoading = this.setLoading.bind(this);
    this.renderHighlighter = this.renderHighlighter.bind(this);
  }

  componentDidMount() {
    if (!this.props.paste.hash) {
      this.setLoading(true);
      this.props.getPaste(this.props.match.params.hash);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paste.hash) {
      this.setLoading(false);
    }
  }

  setLoading(truth) {
    this.setState({ loading: truth });
  }

  renderHighlighter() {
    if (this.props.paste.hash) {
      return (
        <SyntaxHighlighter
          showLineNumbers
          language={this.props.paste.language}
          style={github}
        >
          {this.props.paste.content}
        </SyntaxHighlighter>
      );
    } else {
      return <span />;
    }
  }

  render() {
    return (
      <Grid className="DisplayView" container stretched centered>
        <Grid.Row>
          <Grid.Column>
            <Segment piled loading={this.state.loading}>
              {this.renderHighlighter()}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connectStore(DisplayView);
