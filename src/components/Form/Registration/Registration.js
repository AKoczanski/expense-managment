import React, { useContext } from "react";
import Form from "../Form";
import InputField from "../InputField";
import Button from "../../UI/Button";
import useInput from "../../../hooks/use-input";
import classes from "./Registration.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
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
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYZ_osZw4EDlvhIlO5pzUVCObTX_FK--I",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/login");
      })
      .catch((err) => {
        alert(err.message);
      });

    emailReset();
    passwordReset();
    passwordConfirmReset();
  };

  return (
    <div className={classes.Container}>
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
          className={!isValidForm ? classes.InvalidBtn : classes.Btn}
          disabled={!isValidForm}
          type="submit"
        >
          Register
        </Button>
      </Form>
      <Link to="/login" className={classes.Link}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default Registration;
