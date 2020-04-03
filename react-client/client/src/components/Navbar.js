import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="menu">
        <NavLink exact activeClassName="active" to="/">
          Strona główna
        </NavLink>
        {!isAuthenticated && (
          <NavLink activeClassName="active" to="/login">
            Logowanie
          </NavLink>
        )}
        {!isAuthenticated && (
          <NavLink activeClassName="active" to="/register">
            Rejestracja
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink activeClassName="active" to="/logout">
            Wyloguj
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink activeClassName="active" to="/private">
            Tajemnica
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
