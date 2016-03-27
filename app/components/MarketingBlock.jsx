import React from 'react';
import {Button, Image} from 'react-bootstrap';

const MarketingBlock = props => (
  <div className="marketing-block">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Image responsive src={require("../images/app.png")}/>
        </div>
        <div className="col-sm-6">
          <h3 className="tpad">MARKETING SLOGAN HERE</h3><hr/>
          <p>Marketing Blah Blah Here. Blah Blah Blah.</p>
          <p><Button bsStyle="primary" bsSize="large" href="#">Get it now!</Button></p>
        </div>
      </div>
    </div>
  </div>
);

module.exports = MarketingBlock;
