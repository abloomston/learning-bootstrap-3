import React from 'react';
import {Grid, Row, Col, Button, Image} from 'react-bootstrap';

import styles from '../styles/MarketingBlock.css';
import {tpad} from '../styles/index.jsx';

const MarketingBlock = props => (
  <div className={styles.root}>
    <Grid>
      <Row>
        <Col sm={6}>
          <Image responsive src={require("../images/app.png")}/>
        </Col>
        <Col sm={6}>
          <h3 style={tpad}>MARKETING SLOGAN HERE</h3><hr/>
          <p>Marketing Blah Blah Here. Blah Blah Blah.</p>
          <p><Button bsStyle="primary" bsSize="large" href="#">Get it now!</Button></p>
        </Col>
      </Row>
    </Grid>
  </div>
);

module.exports = MarketingBlock;
