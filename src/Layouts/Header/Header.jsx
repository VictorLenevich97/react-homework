import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../Context/DarkMode";
import styles from "../Header/header.module.css";
import { Link, useNavigate } from "react-router-dom";
import blog from "../../components/svg/blog.svg";
import { SING_IN, POST, HOME } from "../../Costants/routes";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const { darkMode, toogleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    toogleDarkMode();
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerItem}>
        <Link className={styles.headerIcon} to={HOME}>
          <svg
            className={styles.svgIonicon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Home</title>
            <path
              d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </Link>
        <Link className={styles.headerIcon2} to={SING_IN}>
          <svg
            className={styles.svgIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link className={styles.headerImg} to={POST}>
          <img className={styles.headerImg1} src={blog} alt="blog" />
        </Link>
      </div>
      <div className={styles.headerItem2}>
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search....."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            onClick={() => {
              navigate(`search/?search=${inputValue}`);
              setInputValue("");
            }}
            className="searchButton"
            href="#"
          >
            <SearchIcon color="white"></SearchIcon>
          </button>
        </div>
        <img
          className={styles.headerSwitch}
          src={
            darkMode
              ? "https://i.ibb.co/DW6YL02/sun.png"
              : "https://i.ibb.co/F7nF6bf/moon.png"
          }
          alt="LightSwitch on"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
