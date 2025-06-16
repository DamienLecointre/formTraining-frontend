//REACT IMPORTS
import React, { useState } from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//COMPONENTS IMPORTS
import Button from "../components/Button";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

//STYLE IMPORTS
import styles from "../styles/SignUp.module.css";

function LogInPage() {
  // CONST ROUTE TO HOME
  const router = useRouter();

  // CONST TO SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // TOGGLE PASSWORD FUNCTION
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // INPUTS CONST
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ALERTS MESSAGES CONST
  const [emptyField, setEmptyField] = useState(false);
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
  const handleLoginClick = () => {
    // console.log("login");
    if (email === "" && password === "") {
      showTemporaryError(setEmptyField);
    }
  };

  return (
    <div className={styles.signContainer}>
      <div className={styles.signWrapper}>
        <h3 className={styles.signTitle}>Log in</h3>
        {emptyField && (
          <p className={styles.alertMessage}>Missing or empty fields</p>
        )}
        <form>
          <div className={styles.passwordContainer}>
            <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.passwordContainer}>
            <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
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
        </form>
        <Button name="logIn page" onClickLogin={handleLoginClick} />
        <div className={styles.signInContainer}>
          <h5 className={styles.signInText}>Don't have an account ?</h5>
          <Link href="/signUp" className={styles.signInText}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
