import React from "react";
import "./Button.css";

const Button = (props) => {

  const isOperator = (num) => {
    return !isNaN(num) || num === "." || num === "=";
  };

  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
