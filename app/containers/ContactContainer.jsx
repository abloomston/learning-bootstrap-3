import React from 'react';

import Contact from '../components/Contact.jsx';

/* TODO sometimes the first click of [Send] reloads the whole page instead of showing modal */

const ContactContainer = React.createClass({

  getInitialState: function() {
    return {
      showContactedModal: false,
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
      showContactedModal: true
    });
  },

  closeContacted: function() {
    this.setState({
      showContactedModal: false,
      contactEmailAddress: '',
      contactMessage: ''
    });
  },

	render: function() {
		return (
      <Contact
          contactEmailAddress={this.state.contactEmailAddress}
          contactMessage={this.state.contactMessage}
          onUpdateEmailAddress={this.handleUpdateEmailAddress}
          onUpdateMessage={this.handleUpdateMessage}
          sendContact={this.sendContact}
          closeContacted={this.closeContacted}
          showContactedModal={this.state.showContactedModal}
      />
		);
  }
});

module.exports = ContactContainer;
