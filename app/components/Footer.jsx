import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import styles from '../styles/Footer.css';

const Footer = props => (
  <div className={styles.root}>
    <Grid>
      <Row>
        <footer>
          <div className={"pull-left " + styles.extraSpacing}>
            <address>
              <h3>MoveMe, Inc.</h3>
              200 FooBar Ave<br/>
              New York, NY 10001<br/>
              <a href="mailto:contact@move.me">contact@move.me</a><br/>
              <abbr title="Phone">P:</abbr>123-456-7891
            </address>
          </div>
          <div className={"pull-right " + styles.extraSpacing}>
            <Image responsive src={require("../images/moveMe.png")}/>
            <p>&copy; MoveMe, Inc. 2013</p>
          </div>
        </footer>
      </Row>
    </Grid>
  </div>
);

module.exports = Footer;
