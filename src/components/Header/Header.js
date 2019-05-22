import React, { Component } from 'react';
import classes from './Header.module.css';

class Header extends Component {
  render () {
    return (
      <div className={classes.Header}>
        <h1>IV EATI 2019 + I EAE</h1>
      </div>
    );
  }
}

export default Header;