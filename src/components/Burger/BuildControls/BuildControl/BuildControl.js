import React from 'react';
import classes from  './BuildControl.css';

const buildControl = (props) => {
  return(
    <div>
      <div className="BuildControl"> {props.label} </div>
      <button className="Less">Less</button>
      <button className="More" onCLick={props.added}>More</button>
    </div>
  );
}

export default buildControl;
