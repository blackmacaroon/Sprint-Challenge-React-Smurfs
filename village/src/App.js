import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      // console.log('response data', res.data);
      this.setState({ smurfs: res.data })
      console.log('mounting', this.state)
    })
    .catch(err => console.log(err));
  };

  newSmurfHandler = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log("mothersmurfer", err))
  };

  deleteSmurfHandler = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log("smurf that", err))
  };

  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className='nav-bar'>
          <NavLink className='nav-link' to='/smurf-form'>Add A Smurf</NavLink>
          <img className='nav-img' src={ require('./components/images/gargamel.png')} alt='gargamel chasing a smurf'/>
          <NavLink className='nav-link' to='/'>Smurfs</NavLink>

        </div>
        {/* add routes first, declare the route here */}
        <Route
          path='/smurf-form'
          render={props => (
            <SmurfForm
            {...props}
            newSmurf={this.newSmurfHandler}/>
          )}>
        </Route>
        <Route
          exact path='/'
          render={props => (
            <Smurfs 
              {...props}
              smurfs={this.state.smurfs}
              onDelete={this.deleteSmurfHandler}
            />
          )}>
        </Route>
        <img className='foot-img' src={ require('./components/images/papasmurf.png')} alt='papa smurf smiling' />
      </div>
    );
  }
}

export default App;
