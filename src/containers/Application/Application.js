import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';
import Subscription from '../Subscription/Subscription';
import Day from '../Day/Day';

class Application extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Welcome/>
        <Subscription/>
        <h1 style={{fontSize: '40px', marginLeft: '10%'}}>Programação</h1>
        <Day/>
      </div>
    );
  }
}

export default Application;