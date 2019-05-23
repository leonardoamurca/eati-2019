import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './Subscription.module.css';
import { buttonContent } from '../../utils/constants';

class Subscription extends Component {
  render () {
    return (
      <div className={classes.Subscription}>
        {buttonContent.map(btn => (
          <Button key={btn.subject} clicked={btn.link}>{btn.subject}</Button>
        ))}  
      </div>
    );
  }
}

export default Subscription;