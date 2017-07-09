import React from "react";
import { Grid, Segment, Message } from "semantic-ui-react";
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
    this.renderResponseMessages = this.renderResponseMessages.bind(this);
    this.handleDismissOfResponseMessage = this.handleDismissOfResponseMessage.bind(
      this
    );
  }

  componentDidMount() {
    this.textarea.focus();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paste.hash) {
      this.props.history.push(`/${nextProps.paste.hash}`);
    }

    this.setState({ loading: false });
  }

  submitPaste(retention, language) {
    this.props.postPaste(retention, language, this.textarea.value);

    this.setState({ loading: true });
  }

  handleDismissOfResponseMessage(ev, message) {
    this.props.dismissAlert(message.id);
  }

  renderResponseMessages() {
    if (this.props.alerts.length === 0) {
      return null;
    }

    return (
      <Grid.Row className="ResponseMessages">
        <Grid.Column>
          {this.props.alerts.map((alert, idx) => (
            <Message
              key={idx}
              id={idx}
              error
              header={alert.title}
              onDismiss={this.handleDismissOfResponseMessage}
              list={alert.reasons || undefined}
            />
          ))}
        </Grid.Column>
      </Grid.Row>
    );
  }

  render() {
    return (
      <Grid className="ComposeView" container stretched centered>
        {this.renderResponseMessages()}
        <Grid.Row className="ComposeRow">
          <Grid.Column>
            <Segment piled loading={this.state.loading}>
              <textarea
                ref={ref => (this.textarea = ref)}
                className="CodeComposer"
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="SettingsRow">
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
  }).isRequired,
  paste: PropTypes.shape({
    content: PropTypes.string,
    hash: PropTypes.string,
    language: PropTypes.string
  })
};

ComposeView.defaultProps = {
  paste: {
    content: null,
    hash: null,
    language: null
  }
};

export default connectStore(ComposeView);
