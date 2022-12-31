import React from "react";

const Button = ({ text, color, right}) => {
  return (
    <button id="add-btn" style={{ backgroundColor: color, marginRight: right }}>
      {text}
    </button>
  );
};

export default Button;
