import React from 'react';
import {Grid, Row, Col, Button, Image} from 'react-bootstrap';

const MarketingBlock = props => (
  <div className="marketing-block">
    <Grid>
      <Row>
        <Col sm={6}>
          <Image responsive src={require("../images/app.png")}/>
        </Col>
        <Col sm={6}>
          <h3 className="tpad">MARKETING SLOGAN HERE</h3><hr/>
          <p>Marketing Blah Blah Here. Blah Blah Blah.</p>
          <p><Button bsStyle="primary" bsSize="large" href="#">Get it now!</Button></p>
        </Col>
      </Row>
    </Grid>
  </div>
);

module.exports = MarketingBlock;
