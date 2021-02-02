import React, { Component } from 'react';

// Import the Charts we want to work with
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.chartData;
  }
  // The Chart components get imported and can be used like normal components
  // Need to at least pass in the data to determine what to fill the chart with
  // Can also pass in options that act as attributes for the chart
  // The options can modify some chart elements and add things in for clarity
  render() {
    const chartTitle = this.props.chartTitle;
    return (
      <>
        <div>
          <h3>Bar Chart</h3>
          <Bar
            data={this.state.chartData}
            width={75}
            height={200}
            options={{
              title: {
                display: true,
                text: chartTitle,
                fontSize: 25,
              },
              legend: { display: true, position: 'right' },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div>
          <h3>Line Chart</h3>
          <Line
            data={this.state.chartData}
            width={75}
            height={200}
            options={{
              title: {
                display: true,
                text: chartTitle,
                fontSize: 25,
              },
              legend: { display: true, position: 'right' },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div>
          <h3>Pie Chart</h3>
          <Pie
            data={this.state.chartData}
            width={75}
            height={200}
            options={{
              title: {
                display: true,
                text: chartTitle,
                fontSize: 25,
              },
              legend: { display: true, position: 'right' },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </>
    );
  }
}

export default Chart;
