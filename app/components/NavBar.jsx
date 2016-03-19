var React = require('react');

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavBar = props => (
  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="index.html">MoveMe</a>
    </div>
    <div className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Social <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://plus.google.com">Google+</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
);

module.exports = NavBar;
