import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList'; // Don't forget to import your FilteredList component

// TODO (FilteredList): Create a produce list using the 'const' variable keyword
const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Carrot", type: "Vegetable" },
  { name: "Spinach", type: "Vegetable" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Blueberry", type: "Fruit" },
  { name: "Potato", type: "Vegetable" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name={'[Isabella]'} />
        <Counter />

        {/* TODO (FilteredList): Create an instance of the FilteredList Component with a variable named items that takes in your produce list */}
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
