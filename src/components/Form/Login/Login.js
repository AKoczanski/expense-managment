import React, { useContext } from "react";
import Form from "../Form";
import InputField from "../InputField";
import Button from "../../UI/Button";
import useInput from "../../../hooks/use-input";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import { useHistory } from "react-router-dom";

const Login = (props) => {
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

  let isValidForm;
  if (emailIsValid && passwordIsValid) {
    isValidForm = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYZ_osZw4EDlvhIlO5pzUVCObTX_FK--I",
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
        authCtx.login(data.idToken, emailValue);
        authCtx.isLoggedIn = true;
        history.push("/expense");
      })
      .catch((err) => {
        alert(err.message);
      });
    emailReset();
    passwordReset();
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
        <div className={classes.BtnContainer}>
          <Button
            className={!isValidForm ? classes.InvalidBtn : ""}
            disabled={!isValidForm}
            type="submit"
          >
            Login
          </Button>
        </div>
      </Form>
      <Link to="/registration" className={classes.Link}>
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default Login;
