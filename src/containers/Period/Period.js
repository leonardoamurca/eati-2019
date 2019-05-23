import React, { Component } from 'react';
import classes from './Period.module.css';
import Card from '../../components/Card/Card';
import { activities } from '../../utils/constants';



class Period extends Component {
  render () {
    return (
        this.props.isMorning 
          ? <> 
              <h3>Manhã</h3>
                <div className={classes.Period}>
                {activities.map(act => (
                  <Card 
                  key={act.title}
                  title={act.title}
                  local={act.local}
                  schedule={act.schedule}
                  author={act.author}
                  description={act.description}
                  />
              ))}
              </div>
             </> 
          : <> 
          <h3>Tarde</h3>
            <div className={classes.Period}>
            {activities.map(act => (
              <Card 
              key={act.title}
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