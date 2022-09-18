import { useEffect, useState } from "react";
import styles from "./signin.css";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailWrong, setEmailWrong] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [emailError, setEmailError] = useState("Email can not be empty");
  const [passwordError, setPasswordError] = useState(
    "Password can not be empty"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 10) {
      setPasswordError("Incorrect password");
    } else {
      setPasswordError("");
    }
  };

  const errCase = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailWrong(true);
        break;
      case "password":
        setPasswordWrong(true);
        break;
    }
  };

  return (
    <div className="mainForm">
      <form>
        <h1 className="regText">Registration</h1>
        <p className="errorNotif">
          {emailWrong && emailError && <div>{emailError}</div>}
        </p>
        <p>
          <input
            className="inputBar"
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => errCase(e)}
            name="email"
            type="text"
            placeholder="Enter your email..."
          />
        </p>
        <p className="errorNotif">
          {passwordWrong && passwordError && <div>{passwordError}</div>}
        </p>
        <p>
          <input
            className="inputBar"
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => errCase(e)}
            name="password"
            type="password"
            placeholder="Enter your password..."
          />
        </p>
        <p>
          <button className="submitBtn" disabled={!formValid} type="submit">
            Registration
          </button>
        </p>
      </form>
    </div>
  );
};
