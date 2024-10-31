import React from 'react';

const TodoByPriority = ({ todos }) => {
  // Definišite moguće prioritete
  const priorities = [1, 2, 3, 4, 5];

  // Grupisanje zadataka po prioritetu
  const groupedTodos = todos.reduce((acc, todo) => {
    const { priority } = todo;
    if (!acc[priority]) acc[priority] = [];
    acc[priority].push(todo);
    return acc;
  }, {});

  return (
    <div>
      <h2>TODOs by priority</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {priorities.map((priority) => (
          <div key={priority} style={{ textAlign: 'center' }}>
            {/* Naslov prioriteta iznad kvadrata */}
            <h3>{priority}</h3>
            <div style={{ border: '1px solid black', padding: '10px', width: '180px', height: '90px' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {/* Dodajte zadatke samo ako postoje za taj prioritet */}
                {groupedTodos[priority] && groupedTodos[priority].map((todo) => (
                  <li key={todo.id}>
                    - {todo.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoByPriority;
