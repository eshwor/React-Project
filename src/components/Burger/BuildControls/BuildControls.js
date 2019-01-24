import React from 'react';
import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Current Price: ${props.price.toFixed(2)}</p>
    {controls.map(ctrl => (
      <BuildControl
        key={ ctrl.label }
        label={ ctrl.label }
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button>ORDER NOW</button>
  </div>
);

export default buildControls;
