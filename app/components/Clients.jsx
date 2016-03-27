import React from 'react';
import {Grid, Row, Col, Glyphicon, Image, OverlayTrigger, Tooltip} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

const Clients = React.createClass({
	render: function() {

    const clients = [
      {
        name: "client one",
        logo: require("../images/client-logo1.png")
      },
      {
        name: "client two",
        logo: require("../images/client-logo2.png")
      },
      {
        name: "client three",
        logo: require("../images/client-logo3.png")
      },
      {
        name: "client four",
        logo: require("../images/client-logo4.png")
      },
      {
        name: "client five",
        logo: require("../images/client-logo5.png")
      },
      {
        name: "client six",
        logo: require("../images/client-logo6.png")
      },
      {
        name: "client seven",
        logo: require("../images/client-logo7.png")
      },
      {
        name: "client eight",
        logo: require("../images/client-logo8.png")
      }
    ];

		return (
      <div>
        <IntroBlock/>
        <Grid className="padded">
          <Row>
            <Col lg={12}>
              <h2>Our Clients</h2>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </Col>
          </Row>
          <Row className="tpad">
            {clients.map(client => (
               <Col sm={6} md={3} className="bpad" key={client.name}>
                 <OverlayTrigger overlay={<Tooltip id={client.name}>{client.name}</Tooltip>} placement="bottom">
                   <Image src={client.logo} alt={client.name + " logo"} responsive/>
                 </OverlayTrigger>
               </Col>
             ))}
          </Row>
          <Row>
            <Col lg={12}>
              <div className="panel-group" id="accordian">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#collapseOne"><Glyphicon glyph="briefcase"/> Corporate Clients</a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse">
                    <div className="panel-body">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#collapseTwo"><Glyphicon glyph="phone"/> Commercial Clients</a>
                    </h4>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#collapseThree"><Glyphicon glyph="phone"/> App Store Customers</a>
                    </h4>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
		);
	}
});

module.exports = Clients;
