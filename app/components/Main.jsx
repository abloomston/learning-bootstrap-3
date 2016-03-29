import React from 'react';

import NavBar from './NavBar.jsx';
import MarketingBlock from './MarketingBlock.jsx';
import InfoBlock from './InfoBlock.jsx';
import Footer from './Footer.jsx';

import styles from '../styles/Main.css';

const Main = props => (
  <div className={styles.root}>
    <NavBar/>
    {props.children}
    <MarketingBlock/>
    <InfoBlock/>
    <Footer/>
  </div>
);

module.exports = Main;
