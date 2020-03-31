import React, { useEffect, useState } from "react";
import axios from "axios";

const Logout = ({ isLogged, setIsLogged }) => {
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
      });
  }, []);
  return (
    <div>
      <h3 style={{ color: "red", textAlign: "center" }}>Wylogowano</h3>
    </div>
  );
};

export default Logout;
