import React, { Component, Fragment } from 'react';
import './App.css';
// import Child from './child.js';
// import Person from './Persons/Person';

  const Temp = (props) => {
    return (
      <Fragment>
        <h1> {props.name} </h1>
      </Fragment>
    );
  }

class App extends Component {
  state = {
    value: 1
  }

  render() {
    return(
      <div className="App">
        <Temp name={this.state.value}/>
      </div>
    );
  }
}

export default App;
