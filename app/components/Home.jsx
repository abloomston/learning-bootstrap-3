import React from 'react';
import {Button, Carousel, CarouselItem, Image} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

const Home = React.createClass({
	render: function() {

    const slides = [
      {
        key: 1,
        image: require('../images/slide1.jpg'),
        title: 'MOVE ME',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        more_text: 'Sign up today',
        more_link: '#'
      },
      {
        key: 2,
        image: require('../images/slide2.jpg'),
        title: 'HEADING 1',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        more_text: 'Sign up today',
        more_link: '#'
      },
      {
        key: 3,
        image: require('../images/slide3.jpg'),
        title: 'HEADING 2',
        summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        more_text: 'Sign up today',
        more_link: '#'
      }
    ];

		return (
      <div>
        <Carousel defaultActiveIndex={0} interval={4000}>
          {slides.map(slide => (
          <CarouselItem key={slide.key}>
            <Image src={slide.image}/>
            <div className="container active">
              <div className="carousel-caption">
                <h1>{slide.title}</h1>
                <p>{slide.summary}</p>
                <p><Button bsStyle="primary" bsSize="large" href={slide.more_link}>{slide.more_text}</Button></p>
              </div>
            </div>
          </CarouselItem>))}
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
                <Image circle responsive src={require("../images/speed.jpg")}/>
                <h3>Speed</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </div>
              <div className="col-sm-6 col-md-3">
                <Image circle responsive src={require("../images/eco.jpg")}/>
                <h3>Eco Friendly</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </div>
              <div className="clearfix hidden-md hidden-lg"></div>
              <div className="col-sm-6 col-md-3">
                <Image circle responsive src={require("../images/scenic.jpg")}/>
                <h3>Scenic</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </div>
              <div className="col-sm-6 col-md-3">
                <Image circle responsive src={require("../images/safety.jpg")}/>
                <h3>Safe</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
