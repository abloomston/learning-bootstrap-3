import React from 'react';
import {Grid, Row, Col, Button, Carousel, CarouselItem, Image} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

import styles from '../styles/Home.css';

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
      /* TODO create and PR <Carousel.Caption> for carousel-caption below */
      /* TODO create and PR <Clearfix mdHidden lgHidden/> for clearfix below */
      <div className={styles.root}>
        <Carousel defaultActiveIndex={0} interval={4000}>
          {slides.map(slide => (
          <CarouselItem key={slide.key} className={styles.item}>
            <Image src={slide.image} className={styles.slideImage}/>
            <div className="carousel-caption">
              <h1>{slide.title}</h1>
              <p>{slide.summary}</p>
              <p><Button bsStyle="primary" bsSize="large" href={slide.more_link}>{slide.more_text}</Button></p>
            </div>
          </CarouselItem>))}
        </Carousel>
        <IntroBlock/>
        <div className="main-block">
          <Grid className="padded">
            <Row>
              <Col lg={12}>
                <h2>FOUR MODES</h2>
                <hr/>
              </Col>
            </Row>
            <Row>
              <Col sm={6} md={3}>
                <Image circle responsive src={require("../images/speed.jpg")}/>
                <h3>Speed</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </Col>
              <Col sm={6} md={3}>
                <Image circle responsive src={require("../images/eco.jpg")}/>
                <h3>Eco Friendly</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </Col>
              <div className="clearfix hidden-md hidden-lg"></div>
              <Col sm={6} md={3}>
                <Image circle responsive src={require("../images/scenic.jpg")}/>
                <h3>Scenic</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </Col>
              <Col sm={6} md={3}>
                <Image circle responsive src={require("../images/safety.jpg")}/>
                <h3>Safe</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl.</p>
                <p><Button bsStyle="default" href="#">View details &raquo;</Button></p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
});

module.exports = Home;
