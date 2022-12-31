import React from "react";
import Button from "./Button";
import { useState } from "react";

const Header = ({ onAdd, onShow }) => {
  const [content, setContent] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (content !== "") {
      onAdd({ content, isCompleted });
      setContent("");
      setIsCompleted(false);
    }
  };

  return (
    <>
      <div className="head-section">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="text-container"
            placeholder="Enter a todo"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button text="Add" />
        </form>
      </div>
      <div className="task-bg">
        <h1>My task</h1>
        <p id="counter">{onShow()}</p>
      </div>
      <hr />
    </>
  );
};

export default Header;
