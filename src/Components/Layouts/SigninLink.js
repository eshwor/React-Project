import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (

    <ul className="right">
      <li> <NavLink to='/'>New Project</NavLink> </li>
      <li> <NavLink to='/'>Log Out</NavLink> </li>
      <li> <NavLink to='/' className="btn btn-floating pink lighten-1">IK</NavLink> </li>
    </ul>

  );
}


export default SignedInLinks;
