import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import connectStore from "../connect";
import CodeComposerSettings from "./CodeComposerSettings";
import "./ComposeView.css";

class ComposeView extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };

    this.submitPaste = this.submitPaste.bind(this);
  }

  componentDidMount() {
    this.textarea.focus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paste.id) {
      this.props.history.push(`/${nextProps.paste.id}`);
    }
  }

  submitPaste(retention, language) {
    this.props.postPaste(retention, language, this.textarea.value);

    this.setState({ loading: true });
  }

  render() {
    return (
      <Grid className="ComposeView" container stretched centered>
        <Grid.Row>
          <Grid.Column>
            <Segment piled loading={this.state.loading}>
              <textarea
                ref={ref => (this.textarea = ref)}
                className="CodeComposer"
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CodeComposerSettings submitPaste={this.submitPaste} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

ComposeView.propTypes = {
  postPaste: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
  // paste: PropTypes.shape({
  //   content: PropTypes.string.isRequired,
  //   id: PropTypes.string.isRequired,
  //   language: PropTypes.string.isRequired
  // })
};

export default connectStore(ComposeView);
