import React, { Component } from 'react';
import classes from './Day.module.css';
import Period from '../Period/Period';

class Day extends Component {
  render () {
    return (
      <div className={classes.Day}>
        <h2>Sexta-feira | 24/05</h2>
        <h3>Manhã</h3>
        <Period/>
      </div>
    );
  }
}

export default Day;