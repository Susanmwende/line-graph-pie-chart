// src/App.js
import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js'; // Import Chart.js components
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DataSelector from './components/DataSelector';

// Register all necessary components
Chart.register(...registerables);

const App = () => {
    const [timeframe, setTimeframe] = useState('daily');

    const data = {
        daily: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            label: 'Daily Scans',
            data: [10, 20, 30, 25, 15],
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
        },
        weekly: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            label: 'Weekly Scans',
            data: [50, 100, 75, 125],
            borderColor: 'rgba(153,102,255,1)',
            backgroundColor: 'rgba(153,102,255,0.2)',
        },
        monthly: {
            labels: ['January', 'February', 'March'],
            label: 'Monthly Scans',
            data: [200, 300, 250],
            borderColor: 'rgba(255,159,64,1)',
            backgroundColor: 'rgba(255,159,64,0.2)',
        },
    };

    const handleChange = (event) => {
        setTimeframe(event.target.value);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '50%' }}>
                <h2>Line Chart</h2>
                <DataSelector dataType={timeframe} handleChange={handleChange} />
                <LineChart data={data[timeframe]} />
            </div>
            <div style={{ width: '30%' }}>
                <h2>Pie Chart</h2>
                <PieChart data={data[timeframe]} />
            </div>
        </div>
    );
};

export default App;