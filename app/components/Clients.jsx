var React = require('react');

var Clients = React.createClass({
	render: function() {
		return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h2>Our Clients</h2>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
        <div className="row tpad myTooltip">
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client one" className="thumbnail">
              <img src={require("../images/client-logo1.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client two" className="thumbnail">
              <img src={require("../images/client-logo2.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client three" className="thumbnail">
              <img src={require("../images/client-logo3.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client four" className="thumbnail">
              <img src={require("../images/client-logo4.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client five" className="thumbnail">
              <img src={require("../images/client-logo5.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client six" className="thumbnail">
              <img src={require("../images/client-logo6.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client seven" className="thumbnail">
              <img src={require("../images/client-logo7.png")} alt="logo"/>
            </a>
          </div>
          <div className="col-sm-6 col-md-3 bpad">
            <a href="#" data-toggle="tooltip" data-original-title="client eight" className="thumbnail">
              <img src={require("../images/client-logo8.png")} alt="logo"/>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel-group" id="accordian">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#collapseOne"><span className="glyphicon glyphicon-briefcase"></span> Corporate Clients</a>
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
                    <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#collapseTwo"><span className="glyphicon glyphicon-phone"></span> Commercial Clients</a>
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
                    <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#collapseThree"><span className="glyphicon glyphicon-phone"></span> App Store Customers</a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = Clients;
