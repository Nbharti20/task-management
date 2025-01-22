import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskFilter from '../components/TaskFilter';

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('date');

  useEffect(() => {
    // Load tasks from local storage or API
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sort === 'date') return b.id - a.id;
    return b.priority - a.priority;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Management</h1>
      <div className="row">
        <div className="col-md-4">
          <TaskForm addTask={addTask} />
        </div>
        <div className="col-md-8">
          <TaskFilter 
            setFilter={setFilter} 
            setSort={setSort} 
            filter={filter} 
            sort={sort} 
          />
          <TaskList 
            tasks={sortedTasks} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            toggleComplete={toggleComplete} 
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;