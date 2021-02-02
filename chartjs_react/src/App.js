import React, { useState } from 'react';
import './App.css';

import Chart from './Components/Chart';

function App() {
  // Creating the object needed to construct the chart
  // Labels for defining the x-axis
  // DataSets for defining chart properties like labels, data, styling,...
  const [chartData, setData] = useState({
    chartData: {
      labels: [
        'Boston',
        'Worcester',
        'Springfield',
        'Lowell',
        'Cambridge',
        'New Bedford',
      ],
      datasets: [
        {
          label: 'Population',
          data: [617594, 181045, 153060, 106519, 105162, 95072],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
        },
      ],
    },
  });

  return (
    <div className='App'>
      <Chart chartData={chartData} chartTitle='Hello Charts...' />
    </div>
  );
}

export default App;
