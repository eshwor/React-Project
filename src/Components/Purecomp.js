import React, { Component, PureComponent, Fragment } from 'react';
import '../App.css';

//https://reactjs.org/docs/react-api.html
//Let's create a internal Component
const Test = (props) => {
  console.log("Test");
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
}


class Purecomp extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount(){
    setInterval(()=> {
      this.setState(()=>{
        return { val: 1 }
      });
    },2000);
  }

  render(){
    console.log("rendering");
    return (
      <div>

      <Test value={this.state.val}/>


      </div>
    );
  }
}

export default Purecomp;
