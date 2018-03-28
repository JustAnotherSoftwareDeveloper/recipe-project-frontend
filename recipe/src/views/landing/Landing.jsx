import React, { Component } from 'react';
import './Landing.css';
import { Input, Container } from "semantic-ui-react";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing landing-page">
      <Container className="search-bar">
        <Input focus 
        placeholder="Search by Tag or Ingredient..."
        iconPosition="left"
        icon={{name: 'food',color:"red",fluid:true}}
        fluid
        size="massive"
        />
        <span class="advanced-link"><a href="/results">Advanced...</a></span>
      </Container>
    </div>
    )
  }
}
