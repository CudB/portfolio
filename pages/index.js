import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

  static getInitialProps() {
    console.log('I am getInitialProps');
    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      title: 'I am Index Page'
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  updateTitle() {
    this.setState({title: 'I am updated Index Page'});
  }

  render() {
    return (
      <BaseLayout>
        <h1>Index Page</h1>
        <h2> {this.state.title} </h2>
        <button onClick={ () => this.updateTitle() }> Change Title </button>
      </BaseLayout>
    )
  }
}

export default Index;
