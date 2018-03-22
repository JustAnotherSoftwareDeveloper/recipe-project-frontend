import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header block as="h1">Recipe Database</Header>
      </div>
    );
  }
}

export default App;
