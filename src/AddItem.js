import React, { Component } from 'react';
import './App.css';

class AddItem extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.inputName.value, this.inputPrice.value);
    this.inputName.value = '';
    this.inputPrice.value = '';
  }

  render() {
    const { addItem } = this.props;
    return(
      <div className="App">

        <form onSubmit={this.onSubmit}>
          <input type="text" ref={inputName => this.inputName = inputName} placeholder="Your Product Name" />
          <input type="text" ref={inputPrice => this.inputPrice = inputPrice} placeholder="Product Price" />
          <button>Submit</button>
        </form>

      </div>
    );
  }
}

export default AddItem;
