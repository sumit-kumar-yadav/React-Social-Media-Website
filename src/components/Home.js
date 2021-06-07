import React, { Component } from 'react';
import { PostsList } from './';

class Home extends Component {
  render() {
    const { posts } = this.props;
    console.log('Props', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
