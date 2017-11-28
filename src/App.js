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
      const beforeItems = prevState.items;
      const afterItems = beforeItems.map((item, currentIndex) => {
        if (currentIndex === index) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        else {
          return item
        }
      })


      // return the changes we have
      return {
        items: afterItems
      }
    })
  }

  render() {
    const items = this.state.items

    const total = items.length
    let totalCompleted = 0;
    let totalIncompleted = 0;
    items.forEach((item) => {
      if (item.completed) {
        totalCompleted += 1
      }
      else {
        totalIncompleted += 1
      }
    })

    return (
      <div className="App">
        <dl>
          <dt>total</dt>
          <dd>{ total }</dd>
        </dl>

        <dl>
          <dt>total completed</dt>
          <dd>{ totalCompleted }</dd>
        </dl>

        <dl>
          <dt>total Incompleted</dt>
          <dd>{ totalIncompleted }</dd>
        </dl>

        {
          items.map((item, index) => (
            <TodoItem
              key={ index }
              description={ item.description }
              completed={ item.completed }
              onToggleCompleted={
                () => {
                  this.onToggleItemAtIndex(index)
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
