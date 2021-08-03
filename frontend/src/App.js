import React, { Component } from 'react';
import Chart from './components/Chart';

class App extends Component {
  render() {
    return (
      <div>
        <Chart legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
