import React from "react";
import Waves from "../../UI/Waves";
import classes from "./RegistrationContainer.module.css";
import Registration from "../../Form/Registration/Registration";

const FormContainer = () => {
  return (
    <Waves>
      <div className={classes.FormContainer}>
        <div className={classes.FlexContainer}>
          <Registration />
        </div>
      </div>
    </Waves>
  );
};

export default FormContainer;
