import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

const SignedOutLinks = () => {
  return (

    <ul className="right">
      <li> <NavLink to='/signup'>Signup</NavLink> </li>
      <li> <NavLink to='/signin'>Login</NavLink> </li>
    </ul>

  );
}


export default SignedOutLinks;
