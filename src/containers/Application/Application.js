import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';
import Subscription from '../Subscription/Subscription';

class Application extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Welcome/>
        <Subscription/>
      </div>
    );
  }
}

export default Application;