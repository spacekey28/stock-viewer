import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['IBM', 'Apple', 'Amazon', 'Microsoft', 'NVidia', 'Nio', 'Tesla', 'Netflix', 'Shopify', 'Alphabet'],
        datasets: [
          {
            'Meta Data': {
              '1. Information': 'Intraday (5min) open, high, low, close prices and volume',
              '2. Symbol': 'IBM',
              '3. Last Refreshed': '2021-07-30 19:10:00',
              '4. Interval': '5min',
              '5. Output Size': 'Compact',
              '6. Time Zone': 'US/Eastern',
            },
            'Time Series (5min)': {
              '2021-07-30 19:10:00': {
                '1. open': '140.9800',
                '2. high': '140.9800',
                '3. low': '140.9800',
                '4. close': '140.9800',
                '5. volume': '527',
              },
              '2021-07-30 17:30:00': {
                '1. open': '141.1900',
                '2. high': '141.1900',
                '3. low': '141.1900',
                '4. close': '141.1900',
                '5. volume': '300',
              },
            },
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Nasdaq Stock Chart',
              fontSize: 22,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;
