import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
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
    todos: []
   }

   //Get the data using HTTP fetch from this fake JSON data from the : https://jsonplaceholder.typicode.com/
   componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then(response => this.setState({ todos: response.data}));
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}));
  }

  //adds new title
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then( res => this.setState({ todos: [...this.state.todos, res.data]}));
  }

  render() {
    return(
      <Router>
        <div className="App">
          <this.HeaderNav/>
          <p>Welcome React Website</p>
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
