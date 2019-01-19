import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    Persons : [
      { id: "1", name: "Ishwor", age: 30 },
      { id: "2", name: "Santosh", age: 25 },
      { id: "3", name: "Ramkumar", age: 23 }
    ],
    condition: true
  }

  deletePersonHandler = (index) => {
    // alert("Should be work right " + index);
    const persons = this.state.Persons; //Add slice method to copy full array for safely remove element from new array
    // const persons = [...this.state.Persons];
    persons.splice(index,1);
    this.setState({ persons:persons});
  }

  render() {

    //Inline Style
    const style = {
      backgrondColor: 'skyblue',
      curser: 'pointer',
      padding: '1rem'
    }

    return(
      <div className="App">
        {/* { this.state.condition ? <Person name="Ishwor"></Person> : <Person name="Sharmila"></Person> }*/}

        { this.state.Persons.map((person, index) => {
            return(
              <Person style={style} clickEvent={()=>this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id}/>
            )
        })}

    </div>
    );
  }
}

export default App;
