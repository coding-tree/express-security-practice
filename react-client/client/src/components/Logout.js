import React, { useEffect, useState } from "react";
import axios from "axios";

const Logout = props => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const token = document.cookie.replace("authorization=", "");
  useEffect(() => {
    axios({
      method: "POST",
      url: "http://server.localhost/logout",
      headers: { authorization: token },
      data: { user: "name" }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  });
  return (
    <div>
      <h3 style={{ color: "red", textAlign: "center" }}>Wylogowano</h3>
    </div>
  );
};

export default Logout;
