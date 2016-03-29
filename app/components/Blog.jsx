import React from 'react';
import {Grid, Row, Col, Badge, Button, Glyphicon, Image, Input, ListGroup, ListGroupItem, Media, Pagination} from 'react-bootstrap';

import HeadingBlock from './HeadingBlock.jsx';

import styles from '../styles/Blog.css';
import {bpad, tpad} from '../styles/index.jsx';

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

const Blog = props => (
  <div className={styles.root}>
    <HeadingBlock title="Blog"/>
    <Grid className="MainBlock">
      <Row>
        <Col sm={8} className={styles.main}>
          {props.blogPosts.map(blogPost => <BlogPost {...blogPost}/>)}
          <Pagination
              bsSize="medium"
              items={5}
              first
              last
          />
        </Col>
        <Col sm={4} className={styles.sidebar}>
          <section>
            <h3 style={tpad}>Search</h3>
            <form style={tpad}>
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
            <h3 style={tpad}>Tags</h3>
            <ListGroup style={tpad}>
              <ListGroupItem href="#" active><Badge>38</Badge>All Tags</ListGroupItem>
              <ListGroupItem href="#"><Badge>14</Badge>Speed Mode</ListGroupItem>
              <ListGroupItem href="#"><Badge>81</Badge>Eco Friendly</ListGroupItem>
              <ListGroupItem href="#"><Badge>4</Badge>Safe Mode</ListGroupItem>
              <ListGroupItem href="#"><Badge>27</Badge>Scenic Mode</ListGroupItem>
            </ListGroup>
            <hr/>
          </section>
          <section>
            <h3 style={tpad}>Latest from Twitter</h3>
            <Media style={tpad}>
              <Media.Left>
                <a href="#"><Image src={require("../images/user.jpg")} alt="@jimmy"/></a>
              </Media.Left>
              <Media.Body>
                <Media.Heading componentClass="h4">@Jimmy</Media.Heading>
                <p style={bpad}>Can't believe how good this @MoveMe app is, blah blah blah.</p>
              </Media.Body>
            </Media>
          </section>
        </Col>
      </Row>
    </Grid>
  </div>
);

Blog.propTypes = {
  blogPosts: React.PropTypes.array.isRequired
};

module.exports = Blog;
