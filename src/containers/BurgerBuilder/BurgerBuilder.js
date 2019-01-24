import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad:0,
      bacon:0,
      cheese:0,
      meat: 0
    },
    totalPrice: 4
  }

  //ADD ingredient Function
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const unpdatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = unpdatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }


  //REMOVE ingredient Function
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return false; //if there is nothing don't let it go to negative value
    }
    const unpdatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = unpdatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render() {
    //Disable and Enable button
     const disabledInfo = {
       ...this.state.ingredients
     };
     for(let key in disabledInfo){
       disabledInfo[key] = disabledInfo[key] <= 0
     }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
