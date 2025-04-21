import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // Add "type" to the state to store the filter category (Fruit, Vegetables, or All)
    this.state = {
      search: "",
      type: "All"  // Default filter value
    };
  }

  // Sets the search state whenever the user types in the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  // Sets the "type" state variable depending on the selected filter from the dropdown
  onFilter = (selectedType) => {
    this.setState({ type: selectedType });
  };

  // Filters items based on the search term and selected type
  filterItem = (item) => {
    const { search, type } = this.state;
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesType = type === "All" || item.type === type;

    return matchesSearch && matchesType;
  };

  render() {
    return (
      <div className="filter-list">
        
        {/* Dropdown Button to filter by Fruit, Vegetables, or All */}
        <DropdownButton
          title={this.state.type}
          id="filter-dropdown"
          onSelect={this.onFilter}
        >
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
          <MenuItem eventKey="All">All</MenuItem>
        </DropdownButton>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        {/* Pass the filtered items to the List component */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
