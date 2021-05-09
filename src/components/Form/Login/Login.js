import React from "react";
import Form from "../Form";
import InputField from "../InputField";
import Button from "../../UI/Button";
import useInput from "../../../hooks/use-input";
import classes from "./Login.module.css";

const Login = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim().length > 0);

  let isValidForm;
  if (emailIsValid && passwordIsValid) {
    isValidForm = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    emailReset();
    passwordReset();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputField
        className={classes.InputContainer}
        label="E-Mail"
        htmlFor="email"
        id="email"
        type="email"
        value={emailValue}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      {emailHasError && (
        <p className={classes.Paragraph}>Please enter the valid email!</p>
      )}
      <InputField
        className={classes.InputContainer}
        label="Password"
        htmlFor="password"
        id="password"
        type="password"
        value={passwordValue}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      {passwordHasError && (
        <p className={classes.Paragraph}>Please enter the valid password!</p>
      )}
      <Button
        className={!isValidForm ? classes.InvalidBtn : ""}
        disabled={!isValidForm}
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
};

export default Login;
