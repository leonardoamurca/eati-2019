import React, { Component } from 'react';
import classes from './Period.module.css';
import Card from '../../components/Card/Card';


class Period extends Component {
  render () {
    return (
      <div className={classes.Period}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}

export default Period;