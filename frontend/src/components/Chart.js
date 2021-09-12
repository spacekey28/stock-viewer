import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import * as d3 from 'd3';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = props.chartData;
    this.myRef = React.createRef();
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City',
  };

  componentDidMount() {
    console.log(this.myRef);
    d3.select(this.myRef.current).append('p').text('Hello d3');
  }

  render() {
    return (
      <div className="chart" ref={this.myRef}>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Nasdaq Stock Chart in ' + this.props.location,
              fontSize: 22,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Nasdaq Stock Chart in ' + this.props.location,
              fontSize: 22,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Nasdaq Stock Chart in ' + this.props.location,
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
