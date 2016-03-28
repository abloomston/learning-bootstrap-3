import React from 'react';
import {Grid, Row, Col, Button, Modal} from 'react-bootstrap';

const ContactedModal = props => (
  <Modal show={props.show} onHide={props.onClose}>
    <Modal.Header closeButton>
      <h3>Thank you for submitting</h3>
    </Modal.Header>
    <Modal.Body>
      <h4>Message Sent:</h4>
      <Row>
        <Col xs={4}>Email Address</Col>
        <Col xs={8}>{props.emailAddress}</Col>
      </Row>
      <Row>
        <Col xs={4}>Message</Col>
        <Col xs={8}>{props.message}</Col>
      </Row>
      <p>Thanks, The MoveMe Team</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onClose}>OK</Button>
    </Modal.Footer>
  </Modal>
);

ContactedModal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  emailAddress: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
};

module.exports = ContactedModal;
