import React from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

const Home = props => (
  <div>
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
    <IntroBlock/>
    <div className="main-block">
      <div className="container padded">
        <div className="row">
          <div className="col-lg-12">
            <h2>FOUR MODES</h2>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img className="img-circle img-responsive" src={require("../images/speed.jpg")}/>
            <h3>Speed</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
            <p><a href="#" className="btn btn-default">View details &raquo;</a></p>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="img-circle img-responsive" src={require("../images/eco.jpg")}/>
            <h3>Eco Friendly</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
            <p><a href="#" className="btn btn-default">View details &raquo;</a></p>
          </div>
          <div className="clearfix hidden-md hidden-lg"></div>
          <div className="col-sm-6 col-md-3">
            <img className="img-circle img-responsive" src={require("../images/scenic.jpg")}/>
            <h3>Scenic</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
            <p><a href="#" className="btn btn-default">View details &raquo;</a></p>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="img-circle img-responsive" src={require("../images/safety.jpg")}/>
            <h3>Safe</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
            <p><a href="#" className="btn btn-default">View details &raquo;</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

module.exports = Home;
