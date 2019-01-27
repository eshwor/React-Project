import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SignedInLinks from './SigninLink';
import SignedOutLinks from './SignoutLinks';

const Navbar = () => {
  return (

    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to='/' className=" right brand-logo">MarioPlan</Link>
        <SignedInLinks/>
        <SignedOutLinks/>
      </div>
    </nav>

  );
}


export default Navbar;
