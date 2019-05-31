import React from 'react';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <a href="/"> Home </a>
        <a href="/about"> About </a>
        <a href="/portfolios"> Portolio </a>
        <a href="/blogs"> Blog </a>
        <a href="/cv"> CV </a>
      </div>
    )
  }
}

export default Index;
