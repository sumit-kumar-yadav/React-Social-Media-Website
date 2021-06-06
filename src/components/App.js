import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends Component {
  componentDidMount() {
    // Fetch the posts through API call
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

// props types
App.propTypes = {
  posts: PropTypes.array.isRequired,
};

// Required data for the App as props from the store
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
