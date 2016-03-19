var React = require('react');

var Contact = React.createClass({
	render: function() {
		return (
      <div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.4503630462154!2d-122.43176838472998!3d37.77948407975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580bca0e12fc3%3A0x6223272d4a215f15!2sFoo+Bar%2C+San+Francisco%2C+CA+94115!5e0!3m2!1sen!2sus!4v1458341799154" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen></iframe>
        </div>
        <div className="container padded">
          <div className="row">
            <div className="col-sm-8">
              <h2>Get in touch</h2>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Nunc eleifend leo vitae magna.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  <strong>Move Me</strong>:</p>
              <form className="form-horizontal tpad" role="form">
                <div className="form-group">
                  <label for="email" className="col-lg-2 control-label">Email</label>
                  <div className="col-lg-10">
                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group tpad">
                  <label for="message" className="col-lg-2 control-label">Message</label>
                  <div className="col-lg-10">
                    <textarea className="form-control" rows="6" id="message" placeholder="Message..."></textarea>
                  </div>
                </div>
                <div className="form-group tpad">
                  <div className="col-lg-offset-2 col-lg-10">
                    <a data-toggle="modal" href="#myModal" className="btn btn-default btn-lg">Send</a>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
            <div className="col-sm-4">
              <img className="img-circle img-responsive" src={require("../images/office.jpg")}/>
              <hr/>
              <address>
                <h3>MoveMe, Inc.</h3>
                200 FooBar Ave<br/>
                New York, NY 10001<br/>
                <a href="mailto:contact@move.me">contact@move.me</a><br/>
                <abbr title="Phone">P:</abbr>123-456-7891
              </address>
            </div>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = Contact;
