import React from "react";

//STYLE IMPORTS
import styles from "../styles/Button.module.css";

function Button({ name, onClickSignup }) {
  // const { firstName, lastName, password, confirmpassword } = props.value;
  // SUBMIT FUNCTIONS
  const handleSubmitClick = () => {
    if (name === "signUp page" && onClickSignup) {
      onClickSignup();
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
