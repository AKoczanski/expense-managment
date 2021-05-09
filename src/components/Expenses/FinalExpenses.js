import React, { useState } from "react";
import Waves from "../UI/Waves";
import Expenses from "./Expenses";
import classes from "./FinalExpenses.module.css";
import NewExpense from "../NewExpense/NewExpense";

const TEMP = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.39,
    date: new Date(2020, 2, 18),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.39,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Laptop",
    amount: 4294.39,
    date: new Date(2021, 1, 22),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.39,
    date: new Date(2021, 2, 28),
  },
];

function FinalExpenses() {
  const [userExpenses, setUserExpenses] = useState(TEMP);

  const addExpenseHandler = (expense) => {
    setUserExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <Waves>
      <div className={classes.Container}>
        <div className={classes.FlexContainer}>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={userExpenses} />
        </div>
      </div>
    </Waves>
  );
}

export default FinalExpenses;
