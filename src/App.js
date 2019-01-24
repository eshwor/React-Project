import React, { Component } from 'react';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';

import './App.css';


class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

  //Toggle styles action
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //Delete selected list by filter
  //copy from state only those items which is not matched with passed id
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //adds new title
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return(
      <div className="App">
      <TodoAdd addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />



      </div>
    );
  }
}

export default App;
