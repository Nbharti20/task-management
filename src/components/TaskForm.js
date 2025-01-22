import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ title, priority: Number(priority) });
    setTitle('');
    setPriority(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter task" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <select 
          className="form-select" 
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;