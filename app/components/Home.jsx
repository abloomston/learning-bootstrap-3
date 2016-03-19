var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
      <div id="myCarousel" className="slide" ref={(ref) => ref && $(ref).carousel({interval: 4000})}>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src={require("../images/slide1.jpg")}/>
            <div className="container active">
              <div className="carousel-caption">
                <h1>MOVE ME</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p><a href="#" className="btn btn-primary btn-large">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={require("../images/slide2.jpg")}/>
            <div className="container active">
              <div className="carousel-caption">
                <h1>HEADING 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor.</p>
                <p><a href="#" className="btn btn-primary btn-large">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={require("../images/slide3.jpg")}/>
            <div className="container active">
              <div className="carousel-caption">
                <h1>HEADING 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor.</p>
                <p><a href="#" className="btn btn-primary btn-large">Sign up today</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
      </div>
		);
	}
});

module.exports = Home;
