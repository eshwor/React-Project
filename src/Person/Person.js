import React from 'react';
import '../App.css';

const person = (props) => {
  return (
    <div className="person-div">
    {/*
      <h2> Hello From Person Component. </h2>
      <h3>You can add function as well here. { Math.floor(Math.random() * 30) }</h3>
      <h1>You can also pass the arguments using (props)</h1>
    */}

    <p onClick={props.refclickfun}>Hi, My name is {props.name} and I am {props.age} years old. <strong>{props.children}</strong> </p>
    <input type="text" onChange={props.refonChangeFun} /> {/* If you want to display name as a value inside of input value={props.name}*/}

    </div>
  );
}

export default person;
