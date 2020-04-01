import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
const Greetings = ({ history }) => {
  const [isAuthenticated, setAuth] = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {context => (
        <div style={{ color: "white", textAlign: "center" }}>
          {isAuthenticated
            ? "witaj zalogowany użytkowniku"
            : "witaj nieznajomy"}
        </div>
      )}
    </AuthContext.Consumer>
  );
};
export default withRouter(Greetings);
