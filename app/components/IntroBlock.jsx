import React from 'react';
import {Image} from 'react-bootstrap';

const IntroBlock = props => (
  <div className="intro-block">
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <Image responsive className="tpad" src={require("../images/moveMe.png")}/>
        </div>
        <div className="col-xs-9">
          <h1>MOVE ME <span className="text-muted">&raquo; Your Travel Companion</span></h1>
          <p className="lead">Move Me Blah Blah Blah Yadda Yadda Yadda</p>
        </div>
      </div>
    </div>
  </div>
);

module.exports = IntroBlock;
