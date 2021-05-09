import classes from "./ExpensesList.module.css";
import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return (
      <h2 className={classes.Header}>
        Expenses not found in <span>{props.year}</span> year.
      </h2>
    );
  }

  return (
    <ul className={classes.List}>
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
