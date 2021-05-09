import classes from "./InitialScreen.module.css";
import React from "react";
import Welcome from "../InitialScreen/Welcome/Welcome";
import Undraw from "../InitialScreen/Undraw/Undraw";
import Waves from "../UI/Waves";

function InitialScreen() {
  return (
    <Waves>
      <div className={classes.InitialContainer}>
        <div className={classes.FlexContainer}>
          <Welcome />
          <Undraw />
        </div>
      </div>
    </Waves>
  );
}

export default InitialScreen;
