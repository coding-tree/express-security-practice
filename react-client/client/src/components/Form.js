/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";

const Form = props => {
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
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
        setTimeout(() => {
          props.history.push("/login");
          window.location.reload();
        }, 1000);
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
        console.log("jesteśmy w ok");
        setIsLogged(true);
        props.history.push("/");
        window.location.reload();
      })
      .catch(err => {
        console.log("jesteśmy w nie ok");
        console.log(err);
        setIsLogged(false);
      });
  };

  return (
    <>
      <h3 className="title">
        {props.location.pathname === "/login" ? "Logowanie" : "Rejestracja"}
      </h3>
      <form
        onSubmit={
          props.location.pathname === "/login" ? loginHandler : registerHandler
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
            {props.location.pathname === "/login" ? "zaloguj" : "zarejestruj"}
          </button>
        </div>
      </form>
      <h3 style={{ textAlign: "center", color: "green" }}>{message}</h3>
    </>
  );
};

export default withRouter(Form);
