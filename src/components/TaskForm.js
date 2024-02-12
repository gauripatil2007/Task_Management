import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskContent, setTaskContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskContent.trim()) return;
    const newTask = {
      id: Math.random().toString(36).substring(7),
      content: taskContent.trim()
    };
    onAddTask(newTask);
    setTaskContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
