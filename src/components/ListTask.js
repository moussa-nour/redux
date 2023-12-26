import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Task from './Task';
import { setFilter } from '../redux/actions';

// Define the ListTask functional component
const ListTask = () => {
  const tasks = useSelector((state) => {
    if (state.filter === 'all') {
      return state.tasks;
    } else if (state.filter === 'done') {
      return state.tasks.filter((task) => task.isDone);
    } else {
      return state.tasks.filter((task) => !task.isDone);
    }
  });

  
  const dispatch = useDispatch();

  // Render the ListTask component
  return (
    <div className="task-container">
      {tasks.map((task) => (
        // Render the Task component for each task in the filtered list
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;