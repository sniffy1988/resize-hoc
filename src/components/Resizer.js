import React, { Component } from 'react';
import withResize from '../HOCs/withResize';

class Resizer extends Component {
  render() {
    const { text, currentWidth } = this.props;
    return (
      <div>
        {text}
        <p>Current width: {currentWidth}</p>
      </div>
    );
  }
}

export default withResize(Resizer);
