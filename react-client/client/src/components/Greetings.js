import React, { useContext } from "react";
import { withRouter } from "react-router";

import { AuthContext } from "../contexts/AuthContext";

const Greetings = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      {isAuthenticated ? "witaj zalogowany użytkowniku" : "witaj nieznajomy"}
    </div>
  );
};
export default withRouter(Greetings);
