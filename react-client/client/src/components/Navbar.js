import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { NavLink, withRouter } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = props => {
  const ctx = useContext(AuthContext);
  const { isAuthenticated } = ctx;
  console.log(isAuthenticated);
  return (
    <AuthContext.Consumer>
      {context => (
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
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;
