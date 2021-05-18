import classes from "./ExpenseForm.module.css";
import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const authCtx = useContext(AuthContext);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const changeDate = (event) => {
    setDate(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    const expenses = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    fetch(
      "https://expense-managment-c1b24-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: authCtx.email,
          expense: expenses,
        }),
      }
    );
    props.onSaveExpenseData(expenses);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const logoutHandler = () => {
    window.location.reload();
    authCtx.logout();
  };

  return (
    <div className={classes.Container}>
      <form onSubmit={submit}>
        <div className={classes.FlexContainer}>
          <div className={classes.FlexElement}>
            <label>Title</label>
            <input
              type="text"
              onChange={changeTitle}
              value={title}
              maxLength="25"
              required
            />
          </div>
          <div className={classes.FlexElement}>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={changeAmount}
              value={amount}
              required
              max="1000000"
            />
          </div>
          <div className={classes.FlexElement}>
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={changeDate}
              value={date}
              required
            />
          </div>
        </div>
        <Button type="submit" className={classes.AddBtn}>
          Add
        </Button>
      </form>
      <Button className={classes.AddBtn} onClick={logoutHandler}>
        Log out
      </Button>
    </div>
  );
}

export default ExpenseForm;
