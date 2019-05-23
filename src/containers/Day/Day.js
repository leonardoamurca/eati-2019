import React, { Component } from 'react';
import classes from './Day.module.css';
import Period from '../Period/Period';
import { fridayActivities } from '../../utils/constants';


class Day extends Component {
  render () {
    return (
      <div className={classes.Day}>
        <h2>Sexta-feira | 24/05</h2>
        <Period activities={fridayActivities}/>
        <h2>Sábado | 25/05</h2>
        <Period activities={fridayActivities}/>
      </div>
    );
  }
}

export default Day;