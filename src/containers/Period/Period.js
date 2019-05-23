import React, { Component } from 'react';
import classes from './Period.module.css';
import Card from '../../components/Card/Card';



class Period extends Component {
  render () {
    return (
      <> 
        <h3>Manhã</h3>
          <div className={classes.Period}>
            {this.props.activities.morning.map(act => (
              <Card 
                key={act.title}
                fontColor={act.fontColor}
                color={act.color}
                title={act.title}
                local={act.local}
                schedule={act.schedule}
                author={act.author}
                description={act.description}
              />
            ))}
          </div>
        <h3>Tarde</h3>
          <div className={classes.Period}>
            {this.props.activities.afternoon.map(act => (
              <Card 
                key={act.title}
                fontColor={act.fontColor}
                color={act.color}
                title={act.title}
                local={act.local}
                schedule={act.schedule}
                author={act.author}
                description={act.description}
              />
            ))}
          </div>
          <h3>Noite</h3>
          <div className={classes.Period}>
            {this.props.activities.night.map(act => (
              <Card 
                key={act.title}
                fontColor={act.fontColor}
                color={act.color}
                title={act.title}
                local={act.local}
                schedule={act.schedule}
                author={act.author}
                description={act.description}
              />
            ))}
          </div>
        
    </>    
    );
  }
}

export default Period;