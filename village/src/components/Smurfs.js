import React, { Component } from 'react';

import Smurf from './Smurf';
import './smurfs.css'

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className='village-header'>Smurf Village</h1>
        <div className='baseline-bold' />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
