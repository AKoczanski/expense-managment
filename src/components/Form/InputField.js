import classes from "./InputField.module.css";
import React from "react";

const InputField = (props) => {
  const { label, htmlFor, type, onChange, onBlur, value, id } = props;

  return (
    <div className={props.className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </div>
  );
};

export default InputField;
