import classes from "./ExpenseFilter.module.css";
import React from "react";

function ExpenseFilter(props) {
  const dropdownChanger = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes.Control}>
      <select onChange={dropdownChanger}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
