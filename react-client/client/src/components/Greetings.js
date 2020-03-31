import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
const Greetings = ({ history }) => {
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
    <div style={{ color: "white", textAlign: "center" }}>
      {isLogged ? "witaj zalogowany użytkowniku" : "witaj nieznajomy"}
    </div>
  );
};
export default withRouter(Greetings);
