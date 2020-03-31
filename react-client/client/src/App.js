import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Logout from "./components/Logout";
import Greetings from "./components/Greetings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    axios("http://server.localhost/check", {
      method: "POST",
      withCredentials: true
    })
      .then(response => {
        setIsLogged(true);
      })
      .catch(err => {
        console.log(err);
        setIsLogged(false);
      });
  }, []);
  return (
    <AuthContextProvider>
      <Router isLogged={isLogged}>
        <div className="App">
          <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
          <Switch>
            <Route exact path="/" component={Greetings} />
            <Route
              path="/login"
              render={() => (
                <Form isLogged={isLogged} setIsLogged={setIsLogged} />
              )}
            />
            <Route path="/register" component={Form} />
            <Route
              path="/logout"
              render={() => (
                <Logout isLogged={isLogged} setIsLogged={setIsLogged} />
              )}
            />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
};
export default App;
