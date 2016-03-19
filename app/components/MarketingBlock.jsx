var React = require('react');

var MarketingBlock = props => (
  <div className="marketing-block">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <img className="img-responsive" src={require("../images/app.png")}/>
        </div>
        <div className="col-sm-6">
          <h3 className="tpad">MARKETING SLOGAN HERE</h3><hr/>
          <p>Marketing Blah Blah Here. Blah Blah Blah.</p>
          <p><a className="btn btn-lg btn-primary" href="#">Get it now!</a></p>
        </div>
      </div>
    </div>
  </div>
);

module.exports = MarketingBlock;
