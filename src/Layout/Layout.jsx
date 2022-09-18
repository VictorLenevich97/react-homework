import search from "../assets/search.png";
import user from "../assets/user.png";
import styles from "./layout.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { homePage, signInPage } from "../constants/pageNames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Layout = function() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  function getStyle({ isActive }) {
    return { color: isActive ? "#42e6f5" : "white", fontSize: 17 + "px" };
  }

  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <NavLink style={getStyle} to={homePage}>
            Blog
          </NavLink>
          <NavLink style={getStyle} to={signInPage}>
            Sign In
          </NavLink>
        </nav>
        <div className="header__item">
          <input
            className="header__input"
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput}
          />
          <button
            className="header__search"
            onClick={() => {
              navigate(`search/?search=${searchInput}`);
              setSearchInput("");
            }}
          >
            <img src={search} alt="search" />
          </button>
          <img className="header__userName" src={user} alt="userName" />
        </div>
      </header>
      <div className="page__wrapper">
        <Outlet />
        <div className="footer__wrapper">
          <footer className="footer">
            <p className="footer__item">©2022 Blogfolio</p>
            <p className="footer__item">All rights reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};
