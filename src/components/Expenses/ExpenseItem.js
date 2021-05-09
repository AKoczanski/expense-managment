import classes from "./ExpenseItem.module.css";
import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <div className={classes.Container}>
        <ExpenseDate date={props.date} />
        <div className={classes.Description}>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.Price}>{props.amount}$</div>
      </div>
    </li>
  );
}

export default ExpenseItem;
