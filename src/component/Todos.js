import Todo from "./Todo";
const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </ul>
  );
};

export default Todos;
