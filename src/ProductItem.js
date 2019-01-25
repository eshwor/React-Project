import React, { Component } from 'react';
import './App.css';


class ProductItem extends Component {

  render() {
    const {name, price, onDelete} = this.props;
    return(
      <div className="App">

        {
          <div>
            <span>{name}</span>
              {` | `}
            <span>{price}</span>
            <button style={{marginLeft:'1rem'}} onClick={onDelete.bind(this, name)}>Delete</button>
          </div>
        }

      </div>
    );
  }
}

export default ProductItem;
