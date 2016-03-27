import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

const IntroBlock = props => (
  <div className="intro-block">
    <Grid>
      <Row>
        <Col xs={3}>
          <Image responsive className="tpad" src={require("../images/moveMe.png")}/>
        </Col>
        <Col xs={9}>
          <h1>MOVE ME <span className="text-muted">&raquo; Your Travel Companion</span></h1>
          <p className="lead">Move Me Blah Blah Blah Yadda Yadda Yadda</p>
        </Col>
      </Row>
    </Grid>
  </div>
);

module.exports = IntroBlock;
