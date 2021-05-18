import classes from "./Button.module.css";
import React from "react";

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${classes.Button} ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export default Button;
