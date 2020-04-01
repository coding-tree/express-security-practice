import React, { Component, createContext } from "react";
import axios from "axios";
export const AuthContext = createContext();
class AuthContextProvider extends Component {
  state = { isAuthenticated: false };
  setAuth = value => {
    this.setState({ isAuthenticated: value });
  };

  componentDidMount() {
    axios("http://server.localhost/check", {
      method: "POST",
      withCredentials: true
    })
      .then(response => {
        this.setAuth(true);
      })
      .catch(err => {
        console.log(err);
        this.setAuth(false);
      });
  }

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, setAuth: this.setAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
