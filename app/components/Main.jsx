import React from 'react';

import styles from '../styles/index.jsx';

import NavBar from './NavBar.jsx';
import MarketingBlock from './MarketingBlock.jsx';
import InfoBlock from './InfoBlock.jsx';
import Footer from './Footer.jsx';

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
