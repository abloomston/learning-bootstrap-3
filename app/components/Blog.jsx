import React from 'react';

import IntroBlock from './IntroBlock.jsx';

const BlogPost = props => (
  <section>
    <h1><a href="#">{props.title}</a></h1>
    <p className="lead"><a href={props.author_link}>{props.author_name}</a></p>
    <hr/>
    <p><span className="glyphicon glyphicon-time"></span> Posted {props.date}</p>
    <hr/>
    {props.image && <img src={props.image} className="img-responsive"/>}
    <hr/>
    <p>
      {props.summary}
    </p>
    <a className="btn btn-primary" href={props.full_link}>Read More &raquo;</a>
    <hr/>
  </section>
);

const Blog = React.createClass({
	render: function () {

    const blogPosts = [
      {
        title: "Enhancing Existing Features",
        author_link: "#",
        author_name: "Infinite Skills",
        date: "Oct 11, 2015 at 11:54 AM",
        image: require("../images/blog1.jpg"),
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.",
        full_link: "#",
      },
      {
        title: "Speed Mode Boosted",
        author_link: "#",
        author_name: "Infinite Skills",
        date: "Sept 9, 2015 at 10:54 AM",
        image: require("../images/blog2.jpg"),
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.",
        full_link: "#",
      },
      {
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
        <div className="container padded">
          <div className="row">
            <div className="col-sm-8 blog-main">
              {blogPosts.map(blogPost => <BlogPost {...blogPost}/>)}
              <ul className="pagination">
                <li><a href="#">&laquo;</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div>
            <div className="col-sm-4 blog-sidebar">
              <section>
                <h3 className="tpad">Search</h3>
                <div className="input-group input-group-lg tpad">
                  <span className="input-group-addon glyphicon glyphicon-search"></span>
                  <input type="text" className="form-control input-lg" placeholder="Search"/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>
              </section>
              <section>
                <h3 className="tpad">Tags</h3>
                <div className="list-group tpad">
                  <a href="#" className="list-group-item active"><span className="badge">38</span>All Tags</a>
                  <a href="#" className="list-group-item"><span className="badge">14</span>Speed Mode</a>
                  <a href="#" className="list-group-item"><span className="badge">81</span>Eco Friendly</a>
                  <a href="#" className="list-group-item"><span className="badge">4</span>Safe Mode</a>
                  <a href="#" className="list-group-item"><span className="badge">27</span>Scenic Mode</a>
                </div>
                <hr/>
              </section>
              <section>
                <h3 className="tpad">Latest from Twitter</h3>
                <div className="media tpad">
                  <a className="pull-left" href="#">
                    <img className="media-object" src={require("../images/user.jpg")} alt="user"/>
                  </a>
                  <div className="media-body">
                    <h4 className="media-heading">@Jimmy</h4>
                    <p className="bpad">Can't believe how good this @MoveMe app is, blah blah blah.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Blog;
