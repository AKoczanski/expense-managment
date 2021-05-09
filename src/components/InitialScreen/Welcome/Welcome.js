import classes from "./Welcome.module.css";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Header}>
        Manage your money in one <span>place!</span>
      </h1>
      <p className={classes.Paragraph}>
        "Where is my money?" Control your expense and income!
      </p>
      <Link to="/login">
        <Button>Get started</Button>
      </Link>
    </div>
  );
}

export default Welcome;
