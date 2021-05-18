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

  return <ExpenseForm onSaveExpenseData={saveExpense} />;
}

export default NewExpense;
