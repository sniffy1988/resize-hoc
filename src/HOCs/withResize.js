import React, { Component } from 'react';

export default function withResize(Comp) {
  return class extends Component {
    state = {
      currentWidth: window.innerWidth,
    };

    widthStater = () => {
      this.setState({
        currentWidth: window.innerWidth,
      });
    };

    componentDidMount() {
      window.addEventListener('resize', this.widthStater);
    }

    componentWillUpdate() {
      window.removeEventListener('resize', this.widthStater);
    }

    render() {
      return <Comp {...this.props} currentWidth={this.state.currentWidth} />;
    }
  };
}
