import classes from "./Expenses.module.css";
import React, { useState } from "react";
import ExpensesList from "../Expenses/ExpensesList";
import ExpenseFilter from "../Expenses/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const changeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className={classes.Container}>
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeYear} />
      <ExpensesList
        expenses={filteredExpenses}
        year={filteredYear}
        onDeleteItem={props.onDelete}
      />
    </div>
  );
}

export default Expenses;
