import React, { useState } from "react";

//NEXT IMPORTS
import Link from "next/link";

//COMPONENTS IMPORTS
import Button from "./Button";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

//STYLE IMPORTS
import styles from "../styles/SignUp.module.css";

function SignUp() {
  // CONST TO SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // TOGGLE PASSWORD FUNCTION
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // INPUTS CONST
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  // ALERTS MESSAGES CONST
  const [emptyFiked, setEmptyFiked] = useState(false);
  const [isWrongFormat, setIsWrongFormat] = useState(false);
  const [matchingPassword, setMatchingPassword] = useState(false);
  const [newUserAdded, setNewUserAdded] = useState(false);

  // FUNCTION TO HIDDEN ERROR
  const showTemporaryError = (setErrorFunction, duration = 2000) => {
    setErrorFunction(true);
    setTimeout(() => {
      setErrorFunction(false);
    }, duration);
  };

  // CHECK INPUTS FUNCTIONS
  const handleSignUpClick = () => {
    // console.log("hello");
    if (!firstName || !lastName || !password || !confirmpassword) {
      showTemporaryError(setEmptyFiked);
      return;
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmpassword("");
    }
    if (password !== confirmpassword) {
      showTemporaryError(setMatchingPassword);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showTemporaryError(setIsWrongFormat);
      return;
    }
  };

  return (
    <div className={styles.signContainer}>
      <div className={styles.signWrapper}>
        <h3 className={styles.signTitle}>Sign Up</h3>
        {emptyFiked && (
          <p className={styles.alertMessage}>Missing or empty fields</p>
        )}
        <form>
          <div className={styles.namesContainer}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.input}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={styles.input}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {isWrongFormat && (
            <p className={styles.alertMessage}>Wrong email format</p>
          )}
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={styles.eyeIcon}
              onClick={togglePassword}
            />
          </div>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={styles.input}
              onChange={(e) => setConfirmpassword(e.target.value)}
              value={confirmpassword}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className={styles.eyeIcon}
              onClick={togglePassword}
            />
          </div>
          {matchingPassword && (
            <p className={styles.alertMessage}>Passwords not matching</p>
          )}
        </form>
        <Button name="signUp page" onClickSignup={() => handleSignUpClick()} />
        <div className={styles.signInContainer}>
          <h5 className={styles.signInText}>Already have an account ?</h5>
          <Link href="/logIn" className={styles.signInText}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
