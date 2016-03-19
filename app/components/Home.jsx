var React = require('react');

var Bootstrap = require('react-bootstrap');
var Carousel = Bootstrap.Carousel;
var CarouselItem = Bootstrap.CarouselItem;

var Home = props => (
  <Carousel defaultActiveIndex={0} interval={4000}>
    <CarouselItem>
      <img src={require("../images/slide1.jpg")}/>
      <div className="container active">
        <div className="carousel-caption">
          <h1>MOVE ME</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p><a href="#" className="btn btn-primary btn-large">Sign up today</a></p>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <img src={require("../images/slide2.jpg")}/>
      <div className="container active">
        <div className="carousel-caption">
          <h1>HEADING 2</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor.</p>
          <p><a href="#" className="btn btn-primary btn-large">Sign up today</a></p>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <img src={require("../images/slide3.jpg")}/>
      <div className="container active">
        <div className="carousel-caption">
          <h1>HEADING 3</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor.</p>
          <p><a href="#" className="btn btn-primary btn-large">Sign up today</a></p>
        </div>
      </div>
    </CarouselItem>
  </Carousel>
);

module.exports = Home;
