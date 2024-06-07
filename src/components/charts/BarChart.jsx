import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

import { lineChartData } from '../../data/dummyData.jsx';

const MyBarChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    
    const processedData = lineChartData.map(series => 
      series.map(point => ({
        x: point.x.getTime(), 
        y: point.y,
      }))
    );

    const ctx = chartRef.current.getContext('2d');

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: processedData[0].map(point => new Date(point.x).getFullYear()),
        datasets: processedData.map((series, index) => ({
          label: `Series ${index + 1}`,
          data: series.map(point => point.y),
          backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`,
          borderColor: `rgba(0, 0, 0, 0.1)`, 
          borderWidth: 1 
        }))
      },
      options: {
        scales: {
          x: {
            type: 'linear', 
            position: 'bottom' 
          },
          y: {
            beginAtZero: true 
          }
        }
      }
    });

    return () => {
    
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4">
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default MyBarChart;
