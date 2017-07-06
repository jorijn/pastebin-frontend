import React from "react";
import { Segment, Header, Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import BackToPasteButton from "../BackToPasteButton";

import "./Content.css";

const Privacy = ({ history }) => (
  <div>
    <Container>
      <BackToPasteButton history={history} />
    </Container>
    <Segment raised padded className="Content container very text">
      <Header as="h2">Privacy Policy</Header>
      <p>
        This little page is to explain in simple and short terms what
        happens to data you post to this Pastebin.
      </p>

      <Header as="h3">Legal</Header>
      <p>
        I would very much appreciate for you to have your paste data
        comply to the Dutch law. If it doesn't and I'll receive a written
        warrant for your data, know that I log timestamps and your IP address
        with each paste.
      </p>

      <Header as="h3">Location</Header>
      <p>
        The data is hosted in a simple MySQL instance, located in
        Amsterdam, The Netherlands.
      </p>

      <Header as="h3">Retention</Header>
      <p>
        By default your paste will be hosted forever. However, if you like
        you can pick from options to have paste automatically expire after a
        certain time. If you feel that a paste (yours or others) should be pulled offline
        feel free to send me an email at
        {" "}
        <a href="mailto:jorijn@jorijn.com">jorijn@jorijn.com</a>
        .
      </p>

      <Header as="h3">Tracking</Header>
      <p>
        I don't have any analytical trackers on this application like Google Analytics.
      </p>

    </Segment>
  </div>
);

Privacy.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Privacy;
