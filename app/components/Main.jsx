var React = require('react');

var styles = require('../styles/index.jsx');

var NavBar = require('./NavBar.jsx');
var IntroBlock = require('./IntroBlock.jsx');
var MarketingBlock = require('./MarketingBlock.jsx');
var InfoBlock = require('./InfoBlock.jsx');
var Footer = require('./Footer.jsx');

var Main = props => (
  <div>
    <NavBar/>
    <IntroBlock/>
    <div className="main-block">
      <div className="container padded">
        {props.children}
      </div>
    </div>
    <MarketingBlock/>
    <InfoBlock/>
    <Footer/>
  </div>
);

module.exports = Main;
