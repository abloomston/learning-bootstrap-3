var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ReactBootstrap = require('react-bootstrap');
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

var ReactRouterBootstrap = require('react-router-bootstrap');
var LinkContainer = ReactRouterBootstrap.LinkContainer;
var IndexLinkContainer = ReactRouterBootstrap.IndexLinkContainer;

var NavBar = props => (
  /* TODO figure out how to pull this to left. */
  <Navbar inverse fixedTop>
    <Navbar.Header>
      <IndexLinkContainer to="/"><Navbar.Brand>MoveMe</Navbar.Brand></IndexLinkContainer>
      <Navbar.Toggle/>
    </Navbar.Header>
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
