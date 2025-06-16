import React from "react";

//STYLE IMPORTS
import styles from "../styles/Button.module.css";

function Button({ name, onClickSignup, onClickLogin }) {
  // const { firstName, lastName, password, confirmpassword } = props.value;
  // SUBMIT FUNCTIONS
  const handleSubmitClick = () => {
    if (name === "signUp page" && onClickSignup) {
      onClickSignup();
    } else if (name === "logIn page" && onClickLogin) {
      onClickLogin();
    }
  };

  return (
    <button
      type="submit"
      className={styles.btnContainer}
      onClick={() => handleSubmitClick()}
    >
      {name === "signUp page" ? "Sign up" : "Sign in"}
    </button>
  );
}

export default Button;
