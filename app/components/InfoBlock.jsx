var React = require('react');

var React = require('react');

var InfoBlock = React.createClass({
	render: function() {
		return (
      <div className="info-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 tabbable">
              <ul id="myTab" className="nav nav-tabs">
                <li className="active"><a href="#android" data-toggle="tab">Android</a></li>
                <li><a href="#ios" data-toggle="tab">iOS</a></li>
                <li><a href="#win" data-toggle="tab">Windows</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade in active" id="android">
                  <p>
                    <img src={require("../images/gplay.jpg")} alt="google" className="pull-right"/>
                    Android... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.<br/><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
                <div className="tab-pane fade in" id="ios">
                  <p>
                    <img src={require("../images/appstore.jpg")} alt="apple" className="pull-right"/>
                    iOS... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.<br/><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
                <div className="tab-pane fade in" id="win">
                  <p>
                    <img src={require("../images/winstore.jpg")} alt="windows" className="pull-right"/>
                    Windows... Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus.<br/><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star"></span><span className="glyphicon glyphicon-star-empty"></span><span className="glyphicon glyphicon-star-empty"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-sm-offset-2">
              <blockquote>
                <p>&ldquo;This App is the best app I've ever used, ever. &rdquo;</p>
                <small>James T. Kirk, <cite title="source title">Starship Enterprise</cite></small>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = InfoBlock;
