import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { setFilter } from '../redux/actions';

// Define the AddTask functional component
const AddTask = () => {
  // State hook to manage the task input field value
  const [task, setTask] = useState('');

  // Get the 'dispatch' function from the Redux store
  const dispatch = useDispatch();

  // Event handler for adding a new task

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      dispatch(setFilter('all'));
      setTask('');
    }
  };

  // Render the AddTask component
  return (
    <div className="task">
      
      <button className="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;