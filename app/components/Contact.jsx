import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';
import ContactForm from './ContactForm.jsx';
import ContactedModal from './ContactedModal.jsx';

import styles from '../styles/Contact.css';

const Contact = props => (
  <div className={styles.root}>
    <IntroBlock/>
    <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4503630462154!2d-122.43176838472998!3d37.77948407975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580bca0e12fc3%3A0x6223272d4a215f15!2sFoo+Bar%2C+San+Francisco%2C+CA+94115!5e0!3m2!1sen!2sus!4v1458341799154" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    </div>
    {props.showContactedModal &&
    <ContactedModal
        show={props.showContactedModal}
        onClose={props.closeContacted}
        emailAddress={props.contactEmailAddress}
        message={props.contactMessage}
    />}
    <Grid className="padded">
      <Row>
        <Col sm={8}>
          <ContactForm
              onUpdateEmailAddress={props.onUpdateEmailAddress}
              emailAddress={props.contactEmailAddress}
              onUpdateMessage={props.onUpdateMessage}
              message={props.contactMessage}
              onSubmit={props.sendContact}
          />
        </Col>
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

Contact.propTypes = {
  contactEmailAddress: React.PropTypes.string.isRequired,
  contactMessage: React.PropTypes.string.isRequired,
  onUpdateEmailAddress: React.PropTypes.func.isRequired,
  onUpdateMessage: React.PropTypes.func.isRequired,
  sendContact: React.PropTypes.func.isRequired,
  closeContacted: React.PropTypes.func.isRequired,
  showContactedModal: React.PropTypes.bool.isRequired
};

module.exports = Contact;
