import React from 'react';
import {Grid, Row, Col, ButtonInput, Image, Input} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

const Contact = React.createClass({
	render: function() {
		return (
      <div>
        <IntroBlock/>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4503630462154!2d-122.43176838472998!3d37.77948407975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580bca0e12fc3%3A0x6223272d4a215f15!2sFoo+Bar%2C+San+Francisco%2C+CA+94115!5e0!3m2!1sen!2sus!4v1458341799154" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
        <Grid className="padded">
          <Row>
            <Col sm={8}>
              <h2>Get in touch</h2>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Nunc eleifend leo vitae magna.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  <strong>Move Me</strong>:</p>
              <form className="form-horizontal tpad" role="form">
                <Input type="text" label="Email" labelClassName="col-lg-2" wrapperClassName="col-lg-10" placeholder="Email"/>
                <Input type="textarea" label="Message" labelClassName="col-lg-2" wrapperClassName="col-lg-10" rows={6} placeholder="Mesage..."/>
                <ButtonInput type="submit" bsStyle="default" bsSize="large" wrapperClassName="tpad col-lg-offset-2 col-lg-10" value="Send"/>
              </form>
            </Col>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h3 className="modal-title">Thank you for submitting</h3>
                  </div>
                  <div className="modal-body">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Mauris ac felis vel velit tristique imperdiet.  Sed id ligula quis est convallis tempor.</p>
                    <p>The MoveMe Team</p>
                  </div>
                  <div className="modal-footer">
                    <a href="index.html" className="btn btn-default btn-lg">OK</a>
                  </div>
                </div>
              </div>
            </div>
            <Col sm={4}>
              <Image circle responsive src={require("../images/office.jpg")}/>
              <hr/>
              <address>
                <h3>MoveMe, Inc.</h3>
                200 FooBar Ave<br/>
                New York, NY 10001<br/>
                <a href="mailto:contact@move.me">contact@move.me</a><br/>
                <abbr title="Phone">P:</abbr>123-456-7891
              </address>
            </Col>
          </Row>
        </Grid>
      </div>
		);
	}
});

module.exports = Contact;
