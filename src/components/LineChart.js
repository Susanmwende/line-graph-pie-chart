// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    return (
        <div style={{ width: '70%', height: '400px', margin: '0 auto' }}>
            <Line
                data={{
                    labels: data.labels,
                    datasets: [
                        {
                            label: data.label,
                            data: data.data,
                            borderColor: data.borderColor,
                            backgroundColor: data.backgroundColor,
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
        </div>
    );
};

export default LineChart;