import React, { useState, useEffect, useContext } from "react";
import Waves from "../UI/Waves";
import Expenses from "./Expenses";
import classes from "./FinalExpenses.module.css";
import NewExpense from "../NewExpense/NewExpense";
import AuthContext from "../../store/auth-context";

let expensesArray = [];

function FinalExpenses() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    fetch(
      "https://expense-managment-c1b24-default-rtdb.firebaseio.com/expenses.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data === null) {
          return null;
        }
        Object.keys(data).map((key) => {
          if (authCtx.email === data[key].user) {
            expensesArray.push({
              id: Math.random(),
              title: data[key].expense.title,
              amount: data[key].expense.amount,
              date: new Date(data[key].expense.date),
            });
          }
        });
      });
  }, []);

  const [userExpenses, setUserExpenses] = useState(expensesArray);

  const addExpenseHandler = (expense) => {
    setUserExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <Waves className={classes.Waves} />
      <div className={classes.Container}>
        <div className={classes.FlexContainer}>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={userExpenses} />
        </div>
      </div>
    </div>
  );
}

export default FinalExpenses;
