import React, { Component } from 'react';
import propTypes from 'prop-types';
import './style.css';


class Todoitem extends Component {

  getStyle = () => {
    return {
      width: '40rem',
      margin: '2rem auto',
      padding: '10px',
      borderBottom: '1px dotted #CCC',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      backgroundColor: this.props.todo.completed ? '#CCC' : '#DDD'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return(
      <div style={this.getStyle()} className="wrapper">
        <input style={{float:'left'}} type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {" "}
        {title}
        <button onClick={this.props.delTodo.bind(this,id)}>Delete</button>
      </div>
    );
  }
}


Todoitem.propTypes = {
  todo: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,

}



export default Todoitem;
