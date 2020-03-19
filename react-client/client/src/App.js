import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Content from './components/Content';
import LoggedPage from './components/LoggedPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    // axios.
  }
  constructor(props) {
    super(props)
    this.state = {
      isLogged: false
    }
  }
  render() {

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/login" component={Form} />
            <Route path="/register" component={Form} />
          </Switch>
          <LoggedPage />
        </div>
      </Router>
    );
  }
}

export default App;
