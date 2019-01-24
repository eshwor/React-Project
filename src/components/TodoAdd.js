import React, { Component } from 'react';
import propTypes from 'prop-types';
import './style.css';

class TodoAdd extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ' ' });
  }

  onChange = (e) => {
    this.setState({
      // title: e.target.value
      [e.target.name]: e.target.value //for multiple filds
    });
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" name="title" placeholder="Add Todo...." onChange={this.onChange}/>
        <input type="submit" value="submit" className="btn"/>
      </form>
    );
  }
}

TodoAdd.propTypes = {
  onChange: propTypes.func.isRequired
}


export default TodoAdd;
