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
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
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
