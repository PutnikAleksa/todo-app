import React, { useState, useEffect } from "react";
import TodoList from "./components/ToDoList";
import TodoByPriority from "./components/TodoByPriority";

function App() {
   const [isPriorityView, setIsPriorityView] = useState(false);
   const [name, setName] = useState("");
   const [priority, setPriority] = useState("");
   const [todos, setTodos] = useState([]);

   // Resetting todos to initial state on refresh
   useEffect(() => {
      setTodos([]); // Resetting to an empty array
   }, []); // Empty dependency array means this runs once when the component mounts

   const toggleView = () => {
      setIsPriorityView(!isPriorityView);
   };

   const handleAddTodo = () => {
      if (name && priority) {
         const newTodo = {
            id: todos.length + 1,
            name: name,
            priority: parseInt(priority),
            checked: false,
         };
         setTodos([...todos, newTodo]);
         setName("");
         setPriority("");
      }
   };

   const onToggleTodo = (id) => {
      setTodos(
         todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
         )
      );
   };

   return (
      <div className="App">
         <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="number"
            placeholder="Priority (1-5)"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
         />
         <button onClick={handleAddTodo}>Add</button>

         <button onClick={toggleView}>
            {isPriorityView ? "Show All Todos" : "Show By Priority"}
         </button>

         {isPriorityView ? (
            <TodoByPriority todos={todos} onToggleTodo={onToggleTodo} />
         ) : (
            <TodoList todos={todos} onToggleTodo={onToggleTodo} />
         )}
      </div>
   );
}

export default App;
