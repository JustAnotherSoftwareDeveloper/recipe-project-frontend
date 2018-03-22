import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App landing-page">
        <Container className="search-bar">
          <Input focus 
          placeholder="Search by Tag or Ingredient..."
          iconPosition="left"
          icon={{name: 'food',color:"red",fluid:true}}
          fluid
          size="massive"
          />
        </Container>
      </div>
    );
  }
}

export default App;
