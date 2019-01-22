
import React from 'react';
import classes from './Burger.css';
// import Aux from '../../hoc/Aux';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  return (
    <div className='Burger'>
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bacon"/>
      <BurgerIngredient type="salad"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>

  );
}


export default burger;
