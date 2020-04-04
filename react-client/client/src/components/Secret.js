import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
const Secret = ({ history }) => {
  const [isAuthenticated, setAuth] = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div style={{ color: "white", textAlign: "center" }}>Dzień dobry</div>
      )}
    </AuthContext.Consumer>
  );
};
export default withRouter(Secret);
