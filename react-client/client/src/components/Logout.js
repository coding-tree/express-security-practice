import React, { useEffect, useState } from "react";
import axios from "axios";

const Logout = props => {
  const { isLogged, setIsLogged } = props;
  useEffect(() => {
    axios("http://server.localhost/logout", {
      method: "POST",
      withCredentials: true
    })
      .then(res => {
        setIsLogged(false);
      })
      .catch(err => {
        console.log(err);
        setIsLogged(true);
      });
  });
  return (
    <div>
      <h3 style={{ color: "red", textAlign: "center" }}>Wylogowano</h3>
    </div>
  );
};

export default Logout;
