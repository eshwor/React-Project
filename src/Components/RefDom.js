import React, { Component, Fragment } from 'react';
import '../App.css';


class RefDom extends Component {

  onClick = () => {
    console.log(this.firstName.value);
  }

  onKeyUp = (target, e) => {
    if(e.keyCode == 13){
      switch (target) {
        case 'firstname':
          this.lastname.focus();
          break;
        case 'lastname':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          alert("Please fill it up all the field first !!");
          this.firstname.focus();
      }
    }
  }

  render(){

    return(
      <div className="main-wrapper">
        <div>
          <span>First Name:</span>
          <input ref={(input)=>{this.firstName = input}} type="text" onKeyUp={this.onKeyUp.bind(this,'firstname')}/>
        </div>
        <div>
          <span>Last Name:</span>
          <input ref={(input)=>{this.lastname = input}} type="text" onKeyUp={this.onKeyUp.bind(this,'lastname')} />
        </div>
        <div>
          <span>Age:</span>
          <input ref={(input)=>{this.age = input}} type="text" onKeyUp={this.onKeyUp.bind(this,'age')}/>
        </div>
        <div>
          <input ref={(input)=>{this.submit = input}} type="submit" value="submit" onClick={this.onClick} onKeyUp={this.onKeyUp.bind(this,'submit')}/>
        </div>




      </div>
    );
  }
}

export default RefDom;
