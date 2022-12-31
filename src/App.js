import React from "react";
import Header from "./component/Header";
import Todos from "./component/Todos";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle remainder
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Show todo Num
  const showTodoNum = () => todos.length;

  return (
    <div className="todo-container">
      <Header onAdd={addTodo} onShow={showTodoNum} />
      {todos.length > 0 ? (
        <Todos
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      ) : (
        "No todos to show!"
      )}
    </div>
  );
}

export default App;
