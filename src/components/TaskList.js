import React from 'react';
import TaskItem from './TaskItem';
import { Droppable } from 'react-beautiful-dnd';

const TaskList = ({ category, tasks, onTaskMove }) => {
  return (
    <div className="task-list">
      <h2>{category}</h2>
      <Droppable droppableId={category}>
        {(provided) => (
          <div
            className="task-items"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} onTaskMove={onTaskMove} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
