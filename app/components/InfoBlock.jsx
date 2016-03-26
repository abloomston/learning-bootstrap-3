import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

const InfoBlock = props => (
  <div className="info-block">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Android">
              <p>
                <img src={require("../images/gplay.jpg")} alt="google" className="pull-right"/>
                Android... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.<br/><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span>
              </p>
            </Tab>
            <Tab eventKey={2} title="iOS">
              <p>
                <img src={require("../images/appstore.jpg")} alt="apple" className="pull-right"/>
                iOS... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.<br/><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span>
              </p>
            </Tab>
            <Tab eventKey={3} title="Windows">
              <p>
                <img src={require("../images/winstore.jpg")} alt="windows" className="pull-right"/>
                Windows... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.<br/><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span>
              </p>
            </Tab>
          </Tabs>
        </div>
        <div className="col-sm-4 col-sm-offset-2">
          <blockquote>
            <p>&ldquo;This App is the best app I've ever used, ever. &rdquo;</p>
            <small>James T. Kirk, <cite title="source title">Starship Enterprise</cite></small>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);

module.exports = InfoBlock;
