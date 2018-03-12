import React from 'react';
import ReactDOM from 'react-dom';

import './greeting.css';

class Greeting extends React.Component {
  render() {
    return (
      <h1>{this.props.message}</h1>
    );
  }
}

export default Greeting;
