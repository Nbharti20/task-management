import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  return (
    <div className="list-group mt-3">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
          toggleComplete={toggleComplete} 
        />
      ))}
    </div>
  );
}

export default TaskList;