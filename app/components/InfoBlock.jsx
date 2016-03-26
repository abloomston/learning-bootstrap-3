import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import _ from 'lodash';

const InfoBlock = React.createClass({

	render: function() {

    const apps = [
      {
        key: 1,
        name: 'Android',
        image: require("../images/gplay.jpg"),
        summary: 'Android... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.',
        stars: 4
      },
      {
        key: 2,
        name: 'iOS',
        image: require("../images/appstore.jpg"),
        summary: 'iOS... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.',
        stars: 4
      },
      {
        key: 3,
        name: 'Windows',
        image: require("../images/winstore.jpg"),
        summary: 'Windows... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.',
        stars: 3
      }
    ];

    const quotes = [
      {
        key: 1,
        name: 'James T. Kirk',
        source: 'Starship Enterprise',
        quote: "This App is the best app I've ever used, ever."
      }
    ];

		return (
      <div className="info-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Tabs defaultActiveKey={apps.length ? apps[0].key : undefined}>
                {apps.map(app => (
                <Tab key={app.key} eventKey={app.key} title={app.name}>
                  <p>
                    <img src={app.image} alt={app.name + " store logo"} className="pull-right"/>
                    {app.summary}
                    <br/>
                    {_.times(app.stars, (i) => <span key={i} className="glyphicon glyphicon-star"></span>)}
                    {_.times(5 - app.stars, (i) => <span key={i} className="glyphicon glyphicon-star-empty"></span>)}
                  </p>
                </Tab>
                 ))}
              </Tabs>
            </div>
            <div className="col-sm-4 col-sm-offset-2">
              {quotes.map(quote => (
              <blockquote key={quote.key}>
                <p>&ldquo;{quote.quote} &rdquo;</p>
                <small>{quote.name}, <cite title="source title">{quote.source}</cite></small>
              </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = InfoBlock;
