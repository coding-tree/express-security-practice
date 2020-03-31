import React, { Component, createContext } from "react";

export const AuthContext = createContext();
class AuthContextProvider extends Component {
  state = { isAuthenticated: false };
  setAuth = value => {
    this.setState({ isAuthenticated: value });
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, setAuth: this.setAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
