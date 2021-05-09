import React from "react";
import classes from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.Container}>
      <div className={classes.Month}>{month}</div>
      <div className={classes.Day}>{day}</div>
      <div className={classes.Year}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
