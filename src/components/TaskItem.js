import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = ({ task, index, onTaskMove }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className="task-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p>{task.content}</p>
          <button onClick={() => onTaskMove(task)}>Move</button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
