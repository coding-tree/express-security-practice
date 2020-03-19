import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Content from './components/Content';
import LoggedPage from './components/LoggedPage';
import Greetings from './components/Greetings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = document.cookie.replace("Authorization=", "")
    if (!token) return
    axios.post('http://server.localhost/check', { "token": token })
      .then(() => {
        setIsLogged(true)
      }).catch(() => {
        setIsLogged(false)
      })
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route path="/login" component={Form} />
          <Route path="/register" component={Form} />
          <Route path="/private" component={isLogged ? Content : null} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
