import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name:"Ishowr", age:39 },
      { name:"Eshwor", age:28 },
      { name:"Sharmila", age:40 }
    ]
  }

  clickMeFunction = (newName) => {
    //this.state.persons[0].name = "ChangeingName"; DON"T DO THIS WAY
    this.setState({
      persons : [
        // { name:"NewIshowr", age:35 }
         { name: newName, age:35 }
      ]
    })
  }

  onChangeFunction = (event) => {
    this.setState({
      persons : [
         { name: event.target.value , age:35 }
      ]
    })
  }

  render() {
    return(
      <div className="App">
        <button onClick={ this.clickMeFunction }>TYE TO CLICK ME</button>
        {/*<Person refclickfun={this.clickMeFunction} name={this.state.persons[0].name} age={this.state.persons[0].age}> </Person>*/}
        <Person refonChangeFun={this.onChangeFunction} refclickfun={this.clickMeFunction.bind(this,'NEWISHWOR!!!')} name={this.state.persons[0].name} age={this.state.persons[0].age}> </Person>
        <Person name="Eshwor" age="28"> I love to learn React </Person>
        <Person name="Sharmila" age="40" />
      </div>
    );
  }
}

export default App;
