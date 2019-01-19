import React, { Component } from 'react';
import './App.css';

class Child extends Component {

  constructor(){
    super();
    this.state = {
      name: " Child Constructor run onces"
    }
    console.log(this.state.name);
  }

  componentWillMount(){
    console.log(" Child componentWillMount");
  }

  componentDidMount(){
    console.log("Child componentDidMount");
  }


  render(){
    return (
      <div>

      </div>
    );
  }
}

export default Child;
