import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Content from './components/Content';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/login" component={Form} />
          <Route path="/register" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
