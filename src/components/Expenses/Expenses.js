import classes from "./Expenses.module.css";
import React, { useState } from "react";
import ExpensesList from "../Expenses/ExpensesList";
import ExpenseFilter from "../Expenses/ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className={classes.Container}>
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeYear} />
      {filteredExpenses.length === 0 && (
        <h2 className={classes.Header}>
          Expenses not found in <span>{filteredYear}</span> year.
        </h2>
      )}
      <ExpensesList
        expenses={filteredExpenses}
        year={filteredYear}
        onDeleteItem={props.onDelete}
      />
    </div>
  );
}

export default Expenses;
