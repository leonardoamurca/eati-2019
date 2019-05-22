import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Welcome from '../../components/Welcome/Welcome';

class Application extends Component {
  render () {
    return (
      <div>
        <Header/>
        <Welcome/>
      </div>
    );
  }
}

export default Application;