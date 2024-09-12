// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Pie
        data={{
          labels: data.labels,
          datasets: [
            {
              label: 'Total Scans',
              data: data.data,
              backgroundColor: [
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(255,159,64,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  return `${tooltipItem.label}: ${tooltipItem.raw}`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;