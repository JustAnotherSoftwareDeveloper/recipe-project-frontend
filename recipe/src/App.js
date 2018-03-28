import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Landing from './views/landing/Landing';
import Results from './views/search-results/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/results' component={Results} />
        </Switch>
      </div>
    );
  }
}

export default App;
