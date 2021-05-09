import classes from "./NewExpense.module.css";
import React from "react";
import ExpenseForm from "../NewExpense/ExpenseForm";

function NewExpense(props) {
  const saveExpense = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className={classes.Container}>
      <ExpenseForm onSaveExpenseData={saveExpense} />
    </div>
  );
}

export default NewExpense;
