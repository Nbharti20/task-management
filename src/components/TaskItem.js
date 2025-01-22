import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem({ task, updateTask, deleteTask, toggleComplete }) {
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)} 
          className="me-2"
        />
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </div>
      <div>
        <button 
          className="btn btn-sm btn-outline-primary me-2" 
          onClick={() => updateTask(task.id, { ...task, title: prompt('Update task:', task.title) })}
        >
          Edit
        </button>
        <button 
          className="btn btn-sm btn-outline-danger" 
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;