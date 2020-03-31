import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
const Greetings = ({ history }) => {
  const ctx = useContext(AuthContext);
  const { isAuthenticated } = ctx;
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    axios("http://server.localhost/check", {
      method: "POST",
      withCredentials: true
    })
      .then(response => {
        setIsLogged(true);
      })
      .catch(err => {
        console.log(err);
        setIsLogged(false);
      });
  }, []);
  return (
    <AuthContext.Consumer>
      {context => (
        <div style={{ color: "white", textAlign: "center" }}>
          {isLogged ? "witaj zalogowany użytkowniku" : "witaj nieznajomy"}
        </div>
      )}
    </AuthContext.Consumer>
  );
};
export default withRouter(Greetings);
