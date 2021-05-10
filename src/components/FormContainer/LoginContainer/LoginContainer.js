import React from "react";
import Waves from "../../UI/Waves";
import classes from "./LoginContainer.module.css";
import Login from "../../Form/Login/Login";

const LoginContainer = () => {
  return (
    <Waves>
      <div className={classes.FormContainer}>
        <div className={classes.FlexContainer}>
          <Login />
        </div>
      </div>
    </Waves>
  );
};

export default LoginContainer;
