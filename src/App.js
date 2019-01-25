import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddItem from './AddItem';
import './App.css';

const products = [
  {
    name: "iPad",
    price: 300
  },
  {
    name: "iPhone",
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

//Class Start From Here:::::
class App extends Component {

  state = {
    products: []
  }

  //Display the data
  getProduct = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    this.setState({
      products
    });
  }

  //Delete the data
  onDelete = (name) => {
    this.setState({
      products: [...this.state.products.filter(product => product.name !== name)]
    });
  }

  // Add New Items:
  addItem = (product, price) => {
    let newItem = {
      name: product,
      price: price
    }
    this.setState({
      products: [...this.state.products, newItem]
    });
  }


  componentWillMount(){
    this.getProduct();
  }


  render() {
    return(
      <div className="App">
        <AddItem addItem={this.addItem}/>
            <br/><hr/>
        {
          this.state.products.map((product) => {
            return (
              <ProductItem
                key={product.name}
                name={product.name}
                price={product.price}
                onDelete={this.onDelete}
               />
             );
          })
        }
      </div>
    );
  }
}

export default App;
