import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    added: [],
    started: [],
    completed: []
  });

  const handleAddTask = (task) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      added: [...prevTasks.added, task]
    }));
  };

  const handleTaskMove = (task, destinationCategory) => {
    setTasks(prevTasks => {
      const updatedTasks = { ...prevTasks };
      const currentCategory = Object.keys(prevTasks).find(category => prevTasks[category].includes(task));
      updatedTasks[currentCategory] = prevTasks[currentCategory].filter(item => item !== task);
      updatedTasks[destinationCategory] = [...prevTasks[destinationCategory], task];
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        category="Added"
        tasks={tasks.added}
        onTaskMove={task => handleTaskMove(task, 'started')}
      />
      <TaskList
        category="Started"
        tasks={tasks.started}
        onTaskMove={task => handleTaskMove(task, 'completed')}
      />
      <TaskList
        category="Completed"
        tasks={tasks.completed}
        onTaskMove={task => handleTaskMove(task, 'started')}
      />
    </div>
  );
}

export default App;
