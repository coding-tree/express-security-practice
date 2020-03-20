import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
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
      .then(response => {
        setIsLogged(true)
      }).catch(response => {
        setIsLogged(false)
      })
  }, [isLogged])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route path="/login" component={Form} />
          <Route path="/register" component={Form} />
          {isLogged && <Route path="/private" component={LoggedPage} />}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
