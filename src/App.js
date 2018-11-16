import React, { Component } from 'react';
import Resizer from './components/Resizer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Resizer text="resizer from App" />
      </div>
    );
  }
}

export default App;
