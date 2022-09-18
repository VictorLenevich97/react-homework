import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const getStyles = ({ isActive }) => {
    return { color: isActive ? "yellow" : "white" }; //если активна - цвет желтый, если нет - черный
  };
  return (
    <header className="header_container">
      <NavLink className="header_item" style={getStyles} to="/">
        Home Page
      </NavLink>
      <NavLink className="header_item" style={getStyles} to="/signup">
        Signup
      </NavLink>
    </header>
  );
};
