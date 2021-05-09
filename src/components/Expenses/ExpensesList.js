import classes from "./ExpensesList.module.css";
import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";

function ExpensesList(props) {
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
