import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import { useContext } from "react";

import styles from "./header.css";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <h1 className="header">Girsa Blog</h1>
      <div>
        <NavLink to="/posts" className="tabBtn">
          Home
        </NavLink>
        <NavLink to="/signin" className="tabBtn">
          Sign In
        </NavLink>
      </div>
      <div className="switcherContainer">
        <span className="switcherDescrytion">Change Theme</span>
        <label className="switch">
          <input type="checkbox" onClick={themeToggle}></input>
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};
