import React from 'react';
import { useParams, Link } from 'react-router-dom';

function TaskDetailPage() {
  const { id } = useParams();
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return <div className="container mt-4">Task not found</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{task.title}</h1>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <Link to="/" className="btn btn-primary">Back to List</Link>
    </div>
  );
}

export default TaskDetailPage;