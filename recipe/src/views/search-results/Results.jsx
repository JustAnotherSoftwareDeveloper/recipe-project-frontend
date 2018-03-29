import React, { Component } from 'react';
import { Input, Segment, Header, Dropdown } from 'semantic-ui-react';
import './Results.css';
export default class Results extends Component {
  constructor(props) {
    super(props);
    this.drowdownOptions = [{ text: "Ingredients", value: 'ingredients' }, { text: "Title", value: 'title' }, { text: "Tags", value: 'tags' }];
  }
  render() {
    return (
      <div>
        <Segment color="red" inverted>
          <Header inverted as="h1">Recipe Advanced Search</Header>
        </Segment>
        <Header as="h3" className="search-header">
          <label>Category</label>
          <Dropdown placeholder="Select Search Category" selection options={this.drowdownOptions} defaultValue="0">
          </Dropdown>
          <Input focus
            placeholder="Search by Tag or Ingredient..."
            iconPosition="left"
            icon={{ name: 'food', color: "red", fluid: true }}
          />
        </Header>

      </div>

    )
  }
}
