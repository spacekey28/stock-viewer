import React, { Component } from 'react';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    // getting chart data
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: ['IBM', 'Apple', 'Amazon', 'Microsoft', 'NVidia', 'Nio', 'Tesla', 'Netflix', 'Shopify', 'Alphabet'],
        datasets: [
          {
            label: 'Price',
            data: [1010, 1083, 983, 849, 1283, 394, 923, 1003, 1011, 2020],
            backgroundColor: ['red', 'blue', 'green', 'pink', 'black', 'orange', 'purple', 'yellow', 'white', 'lightblue'],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <Chart chartData={this.state.chartData} location="LA" legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
