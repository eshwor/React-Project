import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';
import './App.css';


class App extends Component {

  HeaderNav = (props) => {
    return (
      <div className="header-nav">
        <Link to="/home">Home</Link> | <Link to="/todo">Todo Page</Link> | <Link to="/about">About Us</Link>
      </div>
    );
  }

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
      <Router>
        <div className="App">
          <this.HeaderNav/>

          <Route path="/Home" component={Home}/>

          <Route exact path="/todo" render={props => (
            <>
              <TodoAdd addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </>
          )}/>

          <Route path="/About" component={About}/>

        </div>
      </Router>
    );
  }
}

export default App;
