import React from 'react';

function TaskFilter({ setFilter, setSort, filter, sort }) {
  return (
    <div className="d-flex justify-content-between mb-3">
      <div>
        <select 
          className="form-select" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div>
        <select 
          className="form-select" 
          value={sort} 
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>
    </div>
  );
}

export default TaskFilter;