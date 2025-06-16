import React, { useState } from "react";

//NEXT IMPORTS
import Link from "next/link";
import { useRouter } from "next/router";

//COMPONENTS IMPORTS
import Button from "./Button";

//ICONS IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

//STYLE IMPORTS
import styles from "../styles/SignUp.module.css";

const BACKEND_URL_USERS_SIGNUP =
  process.env.NEXT_PUBLIC_URL_BACKEND_URL_USERS_SIGNUP;

function SignUp() {
  const router = useRouter();
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
  const [confirPassword, setConfirPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // CHECKBOX FUNCTION
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // ALERTS MESSAGES CONST
  const [emptyFiked, setEmptyFiked] = useState(false);
  const [isWrongFormat, setIsWrongFormat] = useState(false);
  const [matchingPassword, setMatchingPassword] = useState(false);
  const [isGoodPasswordFormat, setIsGoodPasswordFormat] = useState(false);
  const [CGVChecked, setCGVChecked] = useState(false);
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
    if (!firstName || !lastName || !email || !password || !confirPassword) {
      showTemporaryError(setEmptyFiked);
      return;
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
      };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showTemporaryError(setIsWrongFormat);
        return;
      }
      if (password !== confirPassword) {
        showTemporaryError(setMatchingPassword);
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(password)) {
        showTemporaryError(setIsGoodPasswordFormat);
        return;
      }
      if (isChecked === false) {
        showTemporaryError(setCGVChecked);
        return;
      }
      fetch(`${BACKEND_URL_USERS_SIGNUP}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirPassword("");
          setIsChecked(false);
          showTemporaryError(setNewUserAdded);
          setTimeout(() => {
            setNewUserAdded(false);
            router.push("/");
          }, 2000);
        });
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
              onChange={(e) => setConfirPassword(e.target.value)}
              value={confirPassword}
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
          {isGoodPasswordFormat && (
            <p className={styles.alertMessage}>
              Password have to include a minimum of 8 characters, an uppercase
              letter, a lowercase letter, a number and a special character.
            </p>
          )}
        </form>
        <label htmlFor="CGV" className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="CGV"
            name="CGV"
            className={styles.checkbox}
            onClick={handleCheckboxChange}
          />
          <span className={styles.checkboxCustom}></span>
          <span>
            I agree with <span className={styles.checkboxLink}>privacy</span>{" "}
            and <span className={styles.checkboxLink}>policy</span>
          </span>
        </label>
        {CGVChecked && (
          <p className={styles.alertMessage}>
            Please accept the general conditions of sale
          </p>
        )}
        <Button name="signUp page" onClickSignup={() => handleSignUpClick()} />
        {newUserAdded && (
          <p className={`${styles.alertMessage} ${styles.congratulation}`}>
            Congratulation !!! Your account was created with success
          </p>
        )}
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
