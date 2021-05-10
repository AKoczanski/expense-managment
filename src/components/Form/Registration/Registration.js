import React from "react";
import Form from "../Form";
import InputField from "../InputField";
import Button from "../../UI/Button";
import useInput from "../../../hooks/use-input";
import classes from "./Registration.module.css";

const Registration = () => {
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

  const {
    value: passwordConfirmValue,
    isValid: passwordConfirmIsValid,
    hasError: passwordConfirmHasError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    reset: passwordConfirmReset,
  } = useInput((value) => value.trim().length > 0);

  let isValidForm;
  let isPasswordConfirmed;
  if (emailIsValid && passwordIsValid && passwordConfirmIsValid) {
    isValidForm = true;
  }
  if (passwordValue !== passwordConfirmValue) {
    isValidForm = false;
    isPasswordConfirmed = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    emailReset();
    passwordReset();
    passwordConfirmReset();
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
      <InputField
        className={classes.InputContainer}
        label="Confirm Password"
        htmlFor="confrim"
        id="confirm"
        type="password"
        value={passwordConfirmValue}
        onChange={passwordConfirmChangeHandler}
        onBlur={passwordConfirmBlurHandler}
      />
      {passwordConfirmHasError && (
        <p className={classes.Paragraph}>Please enter the valid password!</p>
      )}
      {isPasswordConfirmed && (
        <p className={classes.Paragraph}>Passwords are not the same!</p>
      )}
      <Button
        className={!isValidForm ? classes.InvalidBtn : ""}
        disabled={!isValidForm}
        type="submit"
      >
        Register
      </Button>
    </Form>
  );
};

export default Registration;
