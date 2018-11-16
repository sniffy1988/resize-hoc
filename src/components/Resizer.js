import React, { Component } from 'react';
import withResize from '../HOCs/withResize';

class Resizer extends Component {
  render() {
    return (
      <div>
        {this.props.text}
        <p>Current width: {this.props.currentWidth}</p>
      </div>
    );
  }
}

export default withResize(Resizer);
