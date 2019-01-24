import React from 'react';
import classes from  './BuildControl.css';

const buildControl = (props) => {
  return(
    <div>
      <div className="BuildControl"> {props.label} </div>
      <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
      <button className="More" onClick={props.added}>More</button>
    </div>
  );
}

export default buildControl;
