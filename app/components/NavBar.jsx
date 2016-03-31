import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

const NavBar = React.createClass({

  getInitialState: function() {
    return {
      expanded: false
    }
  },

  toggleExpanded: function(expanded) {
    this.setState({
      expanded: expanded
    });
  },

  onClickLink: function() {
    this.toggleExpanded(false);
  },

	render: function() {
		return (
      <Navbar inverse fixedTop fluid
              expanded={this.state.expanded}
              onToggle={this.toggleExpanded}
      >
        <Navbar.Header>
          <IndexLinkContainer to="/"><Navbar.Brand>MoveMe</Navbar.Brand></IndexLinkContainer>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={this.onClickLink}>
            <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>
            <LinkContainer to="/blog"><NavItem>Blog</NavItem></LinkContainer>
            <LinkContainer to="/clients"><NavItem>Clients</NavItem></LinkContainer>
            <LinkContainer to="/contact"><NavItem>Contact</NavItem></LinkContainer>
            <NavDropdown title="Social" id="social-links-dropdown">
              <MenuItem href="https://www.facebook.com">Facebook</MenuItem>
              <MenuItem href="https://www.twitter.com">Twitter</MenuItem>
              <MenuItem href="https://plus.google.com">Google+</MenuItem>
              <MenuItem href="https://www.linkedin.com">LinkedIn</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
		);
	}
});

module.exports = NavBar;
