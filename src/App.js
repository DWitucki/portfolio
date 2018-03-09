import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height='200'/>
          <h1 className="App-title">React App Under Construction</h1>
        </header>
        <p className="App-intro">
          The future address of David's dope web app
        </p>
      </div>
    );
  }
}

export default App;
