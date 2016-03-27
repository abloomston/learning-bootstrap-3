import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

const NavBar = props => (
  /* TODO figure out how to pull this to left. */
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <IndexLinkContainer to="/"><Navbar.Brand>MoveMe</Navbar.Brand></IndexLinkContainer>
      <Navbar.Toggle/>
    </Navbar.Header>
    /* TODO when clicking a link, this does not collapse */
    <Navbar.Collapse>
      <Nav>
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

module.exports = NavBar;
