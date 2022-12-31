import { FaTimes } from "react-icons/fa";
import Button from "./Button";
const Todo = ({ todo, onDelete, onToggle }) => {
  return (
    <li>
      <label>
        <input type="checkbox" onClick={() => onToggle(todo.id)} />
        <span id="content__container">
          {todo.isCompleted ? <s>{todo.content}</s> : todo.content}
        </span>
      </label>
      <span>
        <Button text="Edit" color="grey" right="3px" />
        <button>
          <FaTimes
            style={{ fontSize: "10px" }}
            onClick={() => onDelete(todo.id)}
          />
        </button>
      </span>
    </li>
  );
};

export default Todo;
