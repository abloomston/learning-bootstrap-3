import React from 'react';

import api from '../services/blog.jsx';

import Blog from '../components/Blog.jsx';

const BlogContainer = React.createClass({

  getDefaultProps: function() {
    return {
      postsPerPage: 3
    }
  },

  getInitialState: function() {
    return {
      blogPosts: []
    }
  },

  componentDidMount: function() {
    api.getPosts(this.props.postsPerPage, 1).then(function(posts) {
      this.setState({
        blogPosts: posts
      })
    }.bind(this));
  },

	render: function() {
		return (
			<Blog blogPosts={this.state.blogPosts}/>
		);
	}
});

module.exports = BlogContainer;
