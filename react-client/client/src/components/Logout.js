import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const Logout = ({ isLogged, setIsLogged }) => {
  const ctx = useContext(AuthContext);
  const { isAuthenticated, setAuth } = ctx;
  useEffect(() => {
    axios("http://server.localhost/logout", {
      method: "POST",
      withCredentials: true
    })
      .then(res => {
        setIsLogged(false);
        setAuth(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <AuthContext.Consumer>
      {context => (
        <div>
          <h3 style={{ color: "red", textAlign: "center" }}>Wylogowano</h3>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default Logout;
