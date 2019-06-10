import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import { getSecretData } from '../actions/index'

class Secret extends React.Component {

  static getInitialProps() {
    const secretValue = 'secret value';
    return {secretValue};
  }

  constructor(props) {
    super();

    this.state = {
      secretData: []
    }
  }

  async componentDidMount() {
    const secretData = await getSecretData();
    this.setState({
      secretData
    });
  }

  displaySecretData() {
    const { secretData } = this.state;

    if (secretData && secretData.length > 0) {
      return secretData.map((data, index) => {
        return (
          <div key={index}>
            <p> { data.title } </p>
            <p> { data.description } </p>
          </div>
        )
      })
    }

    return null;
  }

  render() {
    const { secretValue } = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I am Secret Page </h1>
          <p> Secret Content </p>
          <h2> {secretValue} </h2>
          { this.displaySecretData() }
        </BasePage>
      </BaseLayout>  
    )
  }
}

export default withAuth(Secret);