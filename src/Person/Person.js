import React from 'react';
import '../App.css';

const person = (props) => {
  return (
    <div className="person-div">
      <h2 onClick={props.clickEvent}> Hello From {props.name} { props.age }</h2>
    </div>
  );
}

export default person;
