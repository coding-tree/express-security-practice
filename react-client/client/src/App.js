import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import LoggedPage from "./components/LoggedPage";
import Greetings from "./components/Greetings";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);
  useEffect(() => {
    const instance = axios.create({
      withCredentials: true
    });
    instance
      .post("http://server.localhost/check")
      .then(response => {
        console.log("ok");
        setIsLogged(true);
      })
      .catch(response => {
        console.log("not ok");
        setIsLogged(false);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        {isLogged && <div style={{ color: "white" }}>Zalogowano!</div>}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route
            path="/login"
            render={() => (
              <Form isLogged={isLogged} setIsLogged={setIsLogged} />
            )}
          />
          <Route path="/register" component={Form} />
          <Route path="/logout" component={Logout} />
          {isLogged && <Route path="/private" component={LoggedPage} />}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
