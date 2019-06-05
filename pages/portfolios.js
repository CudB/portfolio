import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes'
import PropTypes from 'prop-types';

import axios from 'axios';

class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = []; 

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch(err) {
      console.log(err);
    }
    return {posts: posts.splice(0, 10)};
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li key={post.id}> 
          <Link route={`/portfolio/${post.id}`}>
            <a style={{'fontSize': '20px'}}> {post.title} </a>
          </Link> 
        </li>
      )
    })
  }

  render() {
    const { posts } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1>Portfolios Page</h1>
          <ul>
            { this.renderPosts(posts) }
          </ul>
        </BasePage>
      </BaseLayout>
    )
  }
}

Portfolios.propTypes = {
  posts: PropTypes.array,
};

export default Portfolios;