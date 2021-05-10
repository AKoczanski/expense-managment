import React from "react";
import Waves from "../UI/Waves";
import classes from "./FormContainer.module.css";
import Login from "../Form/Login/Login";
import Registration from "../Form/Registration/Registration";

const FormContainer = () => {
  return (
    <Waves>
      <div className={classes.FormContainer}>
        <div className={classes.FlexContainer}>
          <Login />
          {/* <Registration /> */}
        </div>
      </div>
    </Waves>
  );
};

export default FormContainer;
