import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Projects/ProjectDetails';
import SignIn from './Components/Auth/Signin';
import SignUp from './Components/Auth/Signup';
import './App.css';

class App extends Component {


  render() {
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
