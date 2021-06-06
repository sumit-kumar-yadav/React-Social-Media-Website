import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

class App extends Component {
  componentDidMount() {
    // Fetch the posts through API call
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS', this.props);
    return <div>App</div>;
  }
}

// Required data for the App as props from the store
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
