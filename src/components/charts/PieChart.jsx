import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../data/dummyData.jsx';

// Sum up the data for the pie chart
const processData = (data) => {
  const summary = data.flat().reduce((acc, point) => {
    const year = point.x.getFullYear();
    acc[year] = (acc[year] || 0) + point.y;
    return acc;
  }, {});

  return Object.entries(summary).map(([year, value]) => ({
    name: year,
    value,
  }));
};

const pieColors = ['#8884d8', '#82ca9d', '#ff7300', '#ffc658', '#d0ed57', '#a4de6c', '#8dd1e1', '#d0ed57', '#ffc658', '#d0ed57'];

const MyPieChart = () => {
  const processedData = processData(lineChartData);

  return (
    <div className="p-4">
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Pie
          data={processedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {processedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
  );
};

export default MyPieChart;
