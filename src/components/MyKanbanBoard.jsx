import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Button, Paper, TextField, Box } from '@mui/material';
import { useStateContext } from '../contexts/ContextProvider';
import { tasksData } from '../data/dummyData.jsx';

// Function to format tasks data into columns
const formatTasksData = (tasks) => {
  const columns = {
    todo: { name: 'To Do', items: [] },
    inProgress: { name: 'In Progress', items: [] },
    done: { name: 'Done', items: [] },
  };

  tasks.forEach((task) => {
    const item = { id: Date.now().toString(), content: task.task, deadline: task.deadline };
    switch (task.status) {
      case 'Pending':
        columns.todo.items.push(item);
        break;
      case 'In Progress':
        columns.inProgress.items.push(item);
        break;
      case 'Completed':
        columns.done.items.push(item);
        break;
      default:
        break;
    }
  });

  return columns;
};

const MyKanbanBoard = () => {
  const [columns, setColumns] = useState(formatTasksData(tasksData));
  const [newTask, setNewTask] = useState({ content: '', deadline: '' });
  const { setMyState } = useStateContext();

  const handleAddTask = () => {
    setColumns({
      ...columns,
      todo: {
        ...columns.todo,
        items: [...columns.todo.items, { id: Date.now().toString(), content: newTask.content, deadline: newTask.deadline }],
      },
    });
    setNewTask({ content: '', deadline: '' });
  };

  const handleDragStart = (event, item, sourceColumnId) => {
    event.dataTransfer.setData('item', JSON.stringify(item));
    event.dataTransfer.setData('sourceColumnId', sourceColumnId);
  };

  const handleDrop = (event, targetColumnId) => {
    const item = JSON.parse(event.dataTransfer.getData('item'));
    const sourceColumnId = event.dataTransfer.getData('sourceColumnId');

    const sourceColumn = columns[sourceColumnId];
    const targetColumn = columns[targetColumnId];

    const sourceItems = [...sourceColumn.items];
    const targetItems = [...targetColumn.items];

    const itemIndex = sourceItems.findIndex((i) => i.id === item.id);
    sourceItems.splice(itemIndex, 1);
    targetItems.push(item);

    setColumns({
      ...columns,
      [sourceColumnId]: { ...sourceColumn, items: sourceItems },
      [targetColumnId]: { ...targetColumn, items: targetItems },
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const getColumnBackgroundColor = (columnId) => {
    switch (columnId) {
      case 'todo':
        return '#4ade80';
      case 'inProgress':
        return '#facc15';
      case 'done':
        return '#f87171';
      default:
        return '#f4f4f4';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  return (
    <Grid container spacing={2} padding={2}>
      {Object.entries(columns).map(([columnId, column]) => (
        <Grid item xs={4} key={columnId} className=''>
          <Paper elevation={3}>
            <Typography variant="h6" align="center" padding={2} style={{ backgroundColor: getColumnBackgroundColor(columnId) }}>
              {column.name}
            </Typography>
            <Box
              onDrop={(event) => handleDrop(event, columnId)}
              onDragOver={handleDragOver}
              style={{ minHeight: '500px', padding: '10px', backgroundColor: '#f4f4f4' }}
            >
              {column.items.map((item) => (
                <Card
                  key={item.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, item, columnId)}
                  style={{ marginBottom: '10px', textDecoration: columnId === 'done' ? 'line-through' : 'none' }}
                >
                  <CardContent>
                    <Typography>{item.content}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Deadline: {item.deadline}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>
      ))}
      <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
        <Typography variant="h6">Add a new task</Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              name="content"
              value={newTask.content}
              onChange={handleChange}
              placeholder="Enter new task"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              name="deadline"
              value={newTask.deadline}
              onChange={handleChange}
              placeholder="Enter deadline (YYYY-MM-DD)"
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="inherit"  onClick={handleAddTask}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default MyKanbanBoard;
