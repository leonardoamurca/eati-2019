import React, { Component } from 'react';
import classes from './Card.module.css';
import Button from '../UI/Button/Button';

class Card extends Component {
  render () {
    return (
      <div style={{backgroundColor: `${this.props.color}`}} className={classes.Card}>
        <h3>
          {this.props.title}
          <br/>
          <span>{this.props.author}{this.props.schedule}</span>
          <br/>
          <span>Local: {this.props.local}</span>
        </h3>
        <p>
        {this.props.shortDescription}
        </p>
        <span><Button>Ver mais</Button></span>
      </div>
    );
  }
  
}

export default Card;