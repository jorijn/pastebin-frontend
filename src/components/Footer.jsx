import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default class Footer extends React.Component {
  constructor() {
    super();

    this.state = { activeItem: "" };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  handleItemClick(name) {
    this.setState({ activeItem: name });
  }

  renderItem(slug, link, label) {
    const { activeItem } = this.state;

    return (
      <Link to={link}>
        <Menu.Item
          as="span"
          link
          name={slug}
          active={activeItem === slug}
          onClick={(e, options) => this.handleItemClick(options, link)}
        >
          {label}
        </Menu.Item>
      </Link>
    );
  }

  render() {
    return (
      <Container>
        <Menu secondary className="FooterNavigation">
          {this.renderItem("about", "/about", "About")}
          {this.renderItem("privacy", "/privacy", "Privacy")}
          <Menu.Item
            as="a"
            href="https://github.com/jorijn/pastebin-frontend"
            link
          >
            GitHub
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a" href="https://www.netlify.com/" link>
              Deploys by Netlify
            </Menu.Item>
            <Menu.Item as="a" href="https://jorijn.com/" link>
              Created by @jorijn
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
