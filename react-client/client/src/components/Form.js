/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Form = ({ history, location }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    if (isRegistered) {
      history.push("/login");
    }
  }, [isRegistered]);
  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged]);
  const handleInputChange = e =>
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const registerHandler = e => {
    e.preventDefault();
    axios
      .post("http://server.localhost/register", data)
      .then(response => {
        console.log(response);
        setMessage("Stworzono konto");
        setIsRegistered(true);
      })
      .catch(error => {
        setMessage(error.response.data);
        setIsRegistered(false);
      });
  };
  const loginHandler = e => {
    e.preventDefault();
    axios("http://server.localhost/login", {
      method: "POST",
      data: data,
      withCredentials: true
    })
      .then(response => {
        setIsLogged(true);
        history.push("/");
      })
      .catch(err => {
        console.log(err);
        setIsLogged(false);
      });
  };

  return (
    <>
      <h3 className="title">
        {location.pathname === "/login" ? "Logowanie" : "Rejestracja"}
      </h3>
      <form
        onSubmit={
          location.pathname === "/login" ? loginHandler : registerHandler
        }
      >
        <input
          type="text"
          placeholder="login"
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="hasło"
          name="password"
          onChange={handleInputChange}
        />
        <div className="buttons">
          <button type="submit">
            {location.pathname === "/login" ? "zaloguj" : "zarejestruj"}
          </button>
        </div>
      </form>
      <h3 style={{ textAlign: "center", color: "green" }}>{message}</h3>
    </>
  );
};

export default withRouter(Form);
