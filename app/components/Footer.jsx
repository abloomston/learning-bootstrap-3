import React from 'react';

var Footer = props => (
  <div className="footer-block">
    <div className="container">
      <div className="row">
        <footer>
          <div className="pull-left extra-spacing">
            <address>
              <h3>MoveMe, Inc.</h3>
              200 FooBar Ave<br/>
              New York, NY 10001<br/>
              <a href="mailto:contact@move.me">contact@move.me</a><br/>
              <abbr title="Phone">P:</abbr>123-456-7891
            </address>
          </div>
          <div className="pull-right extra-spacing">
            <img className="img-responsive" src={require("../images/moveMe.png")}/>
            <p>&copy; MoveMe, Inc. 2013</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

module.exports = Footer;
