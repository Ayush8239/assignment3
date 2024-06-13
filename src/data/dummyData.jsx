import React from 'react';

export const tasksData = [
  { task: "Design Landing Page", deadline: "2024-06-15", status: "Completed" },
  { task: "Implement Login Functionality", deadline: "2024-06-20", status: "In Progress" },
  { task: "Database Optimization", deadline: "2024-06-25", status: "Pending" },
  { task: "Fix Bug #1024", deadline: "2024-06-10", status: "Completed" },
  { task: "Write Unit Tests", deadline: "2024-06-30", status: "Pending" },

  { task: "Implement Dark Mode", deadline: "2024-07-15", status: "Pending" },
  { task: "Integrate Payment Gateway", deadline: "2024-07-20", status: "In Progress" },
  { task: "Create Marketing Strategy", deadline: "2024-07-25", status: "Pending" },  
];

export const lineChartData = [
  [
    { x: new Date(2019, 0, 1), y: 21 },
    { x: new Date(2020, 0, 1), y: 24 },
    { x: new Date(2021, 0, 1), y: 36 },
    { x: new Date(2022, 0, 1), y: 38 },
    { x: new Date(2023, 0, 1), y: 54 },
    { x: new Date(2024, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2019, 0, 1), y: 28 },
    { x: new Date(2020, 0, 1), y: 44 },
    { x: new Date(2021, 0, 1), y: 48 },
    { x: new Date(2022, 0, 1), y: 50 },
    { x: new Date(2023, 0, 1), y: 66 },
    { x: new Date(2024, 0, 1), y: 78 },
  ],

  [
    { x: new Date(2019, 0, 1), y: 10 },
    { x: new Date(2020, 0, 1), y: 20 },
    { x: new Date(2021, 0, 1), y: 30 },
    { x: new Date(2022, 0, 1), y: 39 },
    { x: new Date(2023, 0, 1), y: 50 },
    { x: new Date(2024, 0, 1), y: 70 },
  ],
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const modeColor = [
  {
    name: 'light-mode',
    color: '#F7F7F7',
    },
    {
    name: 'dark-mode',
    color: '#333',
  }
]

const dummyData = () => {

  
  return (
    <div>dummyData</div>
  )
}

export default dummyData;

