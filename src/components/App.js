import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar } from './';

// Dummy component to understand routing in react
const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;
const Home = () => <div>Home</div>;

class App extends Component {
  componentDidMount() {
    // Fetch the posts through API call
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      // Tell the react that this is our root component and we will work inside it
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          {/* Lists of the router links (Similar to a tag) */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>

          {/* Route path */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
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
