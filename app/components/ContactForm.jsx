import React from 'react';
import {Grid, Row, Col, ButtonInput, Input} from 'react-bootstrap';

const ContactForm = props => (
  <div>
    <h2>Get in touch</h2>
    <hr/>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Nunc eleifend leo vitae magna.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  <strong>Move Me</strong>:</p>
    <form className="form-horizontal tpad" role="form">
      <Input type="text" label="Email" labelClassName="col-lg-2" wrapperClassName="col-lg-10" placeholder="Email"
             onChange={props.onUpdateEmailAddress} value={props.emailAddress}
      />
      <Input type="textarea" label="Message" labelClassName="col-lg-2" wrapperClassName="col-lg-10" rows={6} placeholder="Mesage..."
             onChange={props.onUpdateMessage} value={props.message}
      />
      <ButtonInput type="submit" bsStyle="default" bsSize="large" wrapperClassName="tpad col-lg-offset-2 col-lg-10" value="Send" onClick={props.onSubmit}/>
    </form>
  </div>
);

ContactForm.propTypes = {
  onUpdateEmailAddress: React.PropTypes.func.isRequired,
  emailAddress: React.PropTypes.string.isRequired,
  onUpdateMessage: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

module.exports = ContactForm;
