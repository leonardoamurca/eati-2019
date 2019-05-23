import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
  <a className={classes.Button} href={props.clicked} >
    <span>{props.children}</span>
  </a>
);

export default button;