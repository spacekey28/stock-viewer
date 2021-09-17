import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import * as d3 from 'd3';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = props.chartData;
    this.myRef = React.createRef();
    this.dataset = [100, 200, 300, 400, 500];
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
    let size = 500;
    let svg = d3.select(this.myRef.current).append('svg').attr('width', size).attr('height', size);
    let rect_width = 95;
    svg
      .selectAll('rect')
      .data(this.dataset)
      .enter()
      .append('rect')
      .attr('x', (d, i) => 5 + i * (rect_width + 5))
      .attr('y', d => size - d)
      .attr('width', rect_width)
      .attr('height', d => d)
      .attr('fill', 'teal');
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
