import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.id),
    datasets: [
      {
        label: 'Highest Price',
        data: data.map(entry => entry.highestprice),
        borderColor: 'rgba(255, 99, 132, 1)', // red color
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Lowest Price',
        data: data.map(entry => entry.lowestprice),
        borderColor: 'rgba(54, 162, 235, 1)', // blue color
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Current Price',
        data: data.map(entry => entry.price),
        borderColor: 'rgba(75, 192, 192, 1)', // green color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
        labels: data.map(entry => entry.id),
        position: 'bottom',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Price Chart</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
