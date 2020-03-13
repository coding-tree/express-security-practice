import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Form />
    </div>
  );
}

export default App;
