import React, { Component } from 'react';

import './form.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.newSmurf(this.state);
    this.props.history.push('/');
  
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
          />
          <div className='baseline' />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
          />
          <div className='baseline' />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
          />
          <div className='baseline' />
          <button className='add-butt' type='submit'>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
