import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All" // Add default type state
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  onFilter = (event) => {
    this.setState({ type: event.target.text });
  };

  filterItem = (item) => {
    const { search, type } = this.state;
    return (
      item.name.toLowerCase().includes(search) &&
      (type === "All" || item.type === type)
    );
  };

  render() {
    return (
      <div className="filter-list">
        <DropdownButton title="Select Type" id="filter-dropdown">
          <Dropdown.Item eventKey="1">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="2">Vegetable</Dropdown.Item>
          <Dropdown.Item eventKey="3">All</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
