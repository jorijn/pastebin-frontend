import React from "react";
import { Segment, Header, Container, Image } from "semantic-ui-react";
import PropTypes from "prop-types";
import BackToPasteButton from "../BackToPasteButton";
import signature from "./../../assets/images/signature.png";

import "./Content.css";

const About = ({ history }) => (
  <div>
    <Container>
      <BackToPasteButton history={history} />
    </Container>
    <Segment raised padded className="Content container very text">
      <Header as="h2">About this Pastebin</Header>
      <p>
        Hello! I am Jorijn Schrijvershof, a 27-year old web developer from Helmond, The Netherlands.
      </p>
      <Header as="h3">Why another Pastebin?</Header>
      <p>
        During my journey on learning React (thanks,
        {" "}
        <a href="https://reactforbeginners.com/">Wes Bos</a>
        !), I wanted to create a real life application to try
        some popular technologies. The idea was born, my goal would to be to create worlds most
        overkill application to host code snippets. Although the application itself does not
        contain many features, you are looking at:
      </p>
      <ul>
        <li>
          This is a Progressive Web App.
          You <em>could</em> use it offline. But generally,
          it's just very fast.
        </li>
        <li>
          It's created using <code>create-react-app</code>.
        </li>
        <li>
          It uses <code>redux</code> for global state tracking
          and <code>redux-saga</code> for asynchronous updating
          and API communication.
        </li>
        <li>
          I try to follow Webpack conventions and import my CSS and images.
        </li>
      </ul>
      <p>
        You can find the source code here:
        {" "}
        <a href="https://github.com/jorijn/pastebin-frontend">
          https://github.com/jorijn/pastebin-frontend
        </a>
      </p>
      <Header as="h3">The API</Header>
      <p>
        I created a companion API for this project in Laravel. It runs on Laravel 5.4 and PHP 7.1.
        You can find the source code here:
        {" "}
        <a href="https://github.com/jorijn/pastebin-backend">
          https://github.com/jorijn/pastebin-backend
        </a>
      </p>
      <p>
        Feel free to contribute to the source code to make sure this thing kicks ass even more. Thanks!
      </p>
      <p>
        <Image src={signature} className="signature" size="medium" />
      </p>
    </Segment>
  </div>
);

About.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default About;
