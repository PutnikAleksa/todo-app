import React, { useState } from 'react';
import '../styles/ToDoList.css'; // Import CSS file

const TodoList = ({ todos, onToggleTodo }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'inProgress') return !todo.checked;
    if (filter === 'done') return todo.checked;
    return true;
  });

  return (
    <div>
      <h2>TODOs:</h2>
      <div>
        <span 
          onClick={() => setFilter('all')} 
          className={`filter-link ${filter === 'all' ? 'active' : ''}`}
        >
          Show All
        </span> |
        <span 
          onClick={() => setFilter('inProgress')} 
          className={`filter-link ${filter === 'inProgress' ? 'active' : ''}`}
        >
          In Progress
        </span> |
        <span 
          onClick={() => setFilter('done')} 
          className={`filter-link ${filter === 'done' ? 'active' : ''}`}
        >
          Done
        </span>
      </div>
      
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.checked} 
              onChange={() => onToggleTodo(todo.id)}
            />
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
