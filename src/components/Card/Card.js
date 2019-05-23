import React from 'react';
import classes from './Card.module.css';

const card = ( props ) => (
  <div className={classes.Card}>
    <h3>
      Credenciamento
      <br/>
      <span>8:30h</span>
    </h3>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum has been the industry's standard dummy text 
    ever since the 1500s, when an unknown printer took a galley of type.
    </p>
  </div>
);

export default card;