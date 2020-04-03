import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { withRouter } from "react-router-dom";

const serverUrl = process.env.REACT_APP_SERVER_URL || "http://server.localhost";

const Logout = props => {
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    axios(`${serverUrl}/logout`, {
      method: "POST",
      withCredentials: true
    })
      .then(res => {
        props.history.push("/");
        console.log(props);
        setAuth(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3 style={{ color: "red", textAlign: "center" }}>Wylogowano</h3>
    </div>
  );
};

export default withRouter(Logout);
