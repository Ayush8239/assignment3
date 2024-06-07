import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../data/dummyData.jsx';


const processData = (data) => {
  return data.map((series) => 
    series.map(point => ({
      x: point.x.getTime(),
      y: point.y,
    }))
  );
};

// List of colors for the areas
const areaColors = ['#8884d8', '#82ca9d', '#ff7300'];

const MyAreaChart = () => {
  const processedData = processData(lineChartData);

  return (
    <div className="p-4">
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart>
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis 
          dataKey="x" 
          type="number" 
          domain={['dataMin', 'dataMax']}
          tickFormatter={(tick) => new Date(tick).getFullYear()}
        />
        <YAxis />
        <Tooltip 
          labelFormatter={(label) => new Date(label).toDateString()}
        />
        <Legend verticalAlign="top" height={36} />
        {processedData.map((data, index) => (
          <Area
            key={index}
            type="monotone"
            data={data}
            dataKey="y"
            stroke={areaColors[index % areaColors.length]}
            fill={areaColors[index % areaColors.length]}
            strokeWidth={2}
            name={`Series ${index + 1}`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  </div>
  );
};

export default MyAreaChart;
