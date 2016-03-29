import React from 'react';

import api from '../services/blog.jsx';

import Blog from '../components/Blog.jsx';

const BlogContainer = React.createClass({

  /*
     Things we could do better here:
     - utilize react-router for blog post page navigation
     - when navigating to another page of blog posts, jump back to top
     - replace pagination with scrolling down automatically loading more blog posts (nullifying notion of pages)
   */

  getDefaultProps: function() {
    return {
      postsPerPage: 3
    }
  },

  getInitialState: function() {
    return {
      blogPosts: [],
      activePage: 0,
      totalBlogPosts: 1
    }
  },

  componentDidMount: function() {
    api.getPostsTotalCount().then(function (totalCount) {
      this.setState({
        totalBlogPosts: totalCount
      });
      this.getPosts(1);
    }.bind(this));
  },

  getPosts: function(activePage) {
    this.setState({
      activePage: activePage
    });
    const lastIndex = this.state.totalBlogPosts - ((activePage - 1) * this.props.postsPerPage);
    const firstIndex = lastIndex - this.props.postsPerPage + 1;
    api.getPosts(lastIndex, firstIndex).then(function(posts) {
      if (this.state.activePage == activePage) {
        this.setState({
          blogPosts: posts
        })
      }
    }.bind(this));
  },

	render: function() {
		return (
			<Blog
          blogPosts={this.state.blogPosts}
          blogActivePage={this.state.activePage}
          totalBlogPages={Math.ceil(this.state.totalBlogPosts / this.props.postsPerPage)}
          onChangeBlogActivePage={this.getPosts}
      />
		);
	}
});

module.exports = BlogContainer;
