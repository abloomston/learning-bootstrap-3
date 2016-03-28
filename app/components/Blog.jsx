import React from 'react';
import {Grid, Row, Col, Button, Glyphicon, Image, Input, ListGroup, ListGroupItem, Media, Pagination} from 'react-bootstrap';

import IntroBlock from './IntroBlock.jsx';

const BlogPost = props => (
  <section>
    <h1><a href={props.full_link}>{props.title}</a></h1>
    <p className="lead"><a href={props.author_link}>{props.author_name}</a></p>
    <hr/>
    <p><Glyphicon glyph="time"/> Posted {props.date}</p>
    <hr/>
    {props.image && <Image src={props.image} responsive/>}
    <hr/>
    <p>
      {props.summary}
    </p>
    <Button bsStyle="primary" href={props.full_link}>Read More &raquo;</Button>
    <hr/>
  </section>
);

const Blog = React.createClass({
	render: function () {

    const blogPosts = [
      {
        key: 1,
        title: "Enhancing Existing Features",
        author_link: "#",
        author_name: "Infinite Skills",
        date: "Oct 11, 2015 at 11:54 AM",
        image: require("../images/blog1.jpg"),
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.",
        full_link: "#",
      },
      {
        key: 2,
        title: "Speed Mode Boosted",
        author_link: "#",
        author_name: "Infinite Skills",
        date: "Sept 9, 2015 at 10:54 AM",
        image: require("../images/blog2.jpg"),
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.",
        full_link: "#",
      },
      {
        key: 3,
        title: "Safe Mode Reached Public Beta",
        author_link: "#",
        author_name: "Infinite Skills",
        date: "July 4, 2015 at 8:54 AM",
        image: require("../images/blog3.jpg"),
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.",
        full_link: "#"
      }
    ];

    return (
      <div>
        <IntroBlock/>
        <Grid className="padded">
          <Row>
            <Col sm={8} className="blog-main">
              {blogPosts.map(blogPost => <BlogPost {...blogPost}/>)}
              <Pagination
                  bsSize="medium"
                  items={5}
                  first
                  last
              />
            </Col>
            <Col sm={4} className="blog-sidebar">
              <section>
                <h3 className="tpad">Search</h3>
                <form className="tpad">
                  <Input
                      type="text"
                      bsSize="large"
                      addonBefore={<Glyphicon glyph="search"/>}
                      placeholder="Search"
                      buttonAfter={<Button>Go!</Button>}
                  />
                </form>
              </section>
              <section>
                <h3 className="tpad">Tags</h3>
                <ListGroup className="tpad">
                  <ListGroupItem href="#" active><span className="badge">38</span>All Tags</ListGroupItem>
                  <ListGroupItem href="#"><span className="badge">14</span>Speed Mode</ListGroupItem>
                  <ListGroupItem href="#"><span className="badge">81</span>Eco Friendly</ListGroupItem>
                  <ListGroupItem href="#"><span className="badge">4</span>Safe Mode</ListGroupItem>
                  <ListGroupItem href="#"><span className="badge">27</span>Scenic Mode</ListGroupItem>
                </ListGroup>
                <hr/>
              </section>
              <section>
                <h3 className="tpad">Latest from Twitter</h3>
                <Media className="tpad">
                  <Media.Left>
                    <a href="#"><Image src={require("../images/user.jpg")} alt="@jimmy"/></a>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading componentClass="h4">@Jimmy</Media.Heading>
                    <p className="bpad">Can't believe how good this @MoveMe app is, blah blah blah.</p>
                  </Media.Body>
                </Media>
              </section>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Blog;
