import React from 'react';
import {Grid, Row, Col, Button, ButtonInput, Image, Input, Modal} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

const Contact = React.createClass({

  getInitialState: function() {
    return {
      showContactModal: false,
      contactEmailAddress: '',
      contactMessage: ''
    };
  },

  handleUpdateEmailAddress: function (event) {
    this.setState({
      contactEmailAddress: event.target.value
    });
  },

  handleUpdateMessage: function (event) {
    this.setState({
      contactMessage: event.target.value
    });
  },

  sendContact: function() {
    this.setState({
      showContactModal: true
    });
  },

  closeContactSent: function() {
    this.setState({
      showContactModal: false,
      contactEmailAddress: '',
      contactMessage: ''
    });
  },

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
                <Input type="text" label="Email" labelClassName="col-lg-2" wrapperClassName="col-lg-10" placeholder="Email"
                       onChange={this.handleUpdateEmailAddress} value={this.state.contactEmailAddress}
                />
                <Input type="textarea" label="Message" labelClassName="col-lg-2" wrapperClassName="col-lg-10" rows={6} placeholder="Mesage..."
                       onChange={this.handleUpdateMessage} value={this.state.contactMessage}
                />
                <ButtonInput type="submit" bsStyle="default" bsSize="large" wrapperClassName="tpad col-lg-offset-2 col-lg-10" value="Send" onClick={this.sendContact}/>
              </form>
            </Col>
            <Modal show={this.state.showContactModal} onHide={this.closeContactSent}>
              <Modal.Header closeButton>
                <h3>Thank you for submitting</h3>
              </Modal.Header>
              <Modal.Body>
                <h4>Message Sent:</h4>
                <Row>
                  <Col xs={4}>Email Address</Col>
                  <Col xs={8}>{this.state.contactEmailAddress}</Col>
                </Row>
                <Row>
                  <Col xs={4}>Message</Col>
                  <Col xs={8}>{this.state.contactMessage}</Col>
                </Row>
                <p>Thanks, The MoveMe Team</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeContactSent}>OK</Button>
              </Modal.Footer>
            </Modal>
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
