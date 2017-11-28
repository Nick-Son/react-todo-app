import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'


class App extends Component {
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: true },
      { description: 'Third', completed: false },
      { description: 'Fourth', completed: false }
    ]
  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      // Get current items
      const items = prevState.items;
      // find the item with the particular index
      const item = items[index];
      item.completed = !item.completed

      // return the changes we have
      return {
        items: items
      }
    })
  }

  render() {
    const items = this.state.items
    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem
              key={ index }
              description={ item.description }
              completed={ item.completed }
              ontoggleCompleted={
                () => {
                  console.log('TodoItem onToggleCompleted recieved', index)
                }
              }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
