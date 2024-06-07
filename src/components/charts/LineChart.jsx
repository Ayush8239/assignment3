import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { lineChartData } from '../../data/dummyData.jsx';


const processData = (data) => {
  return data.map((series) => 
    series.map(point => ({
      x: point.x.getTime(),
      y: point.y,
    }))
  );
};


const lineColors = ['#8884d8', '#82ca9d', '#ff7300'];

const MyLineChart = () => {
  const processedData = processData(lineChartData);

  return (
    <div className="p-4">
    <ResponsiveContainer width="100%" height={400}>
      <LineChart>
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
          <Line
            key={index}
            type="monotone"
            data={data}
            dataKey="y"
            stroke={lineColors[index % lineColors.length]}
            strokeWidth={2}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
            name={`Series ${index + 1}`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default MyLineChart;
