var React = require('react');

var styles = require('../styles/index.jsx');

var NavBar = require('./NavBar.jsx');
var MarketingBlock = require('./MarketingBlock.jsx');
var InfoBlock = require('./InfoBlock.jsx');
var Footer = require('./Footer.jsx');

var Main = props => (
  <div>
    <NavBar/>
    <div className="main-block">
      {props.children}
    </div>
    <MarketingBlock/>
    <InfoBlock/>
    <Footer/>
  </div>
);

module.exports = Main;
