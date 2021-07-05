import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
      <div className='baseline' />
      <button onClick={
        () => props.onDelete(props.id)
      }>
        Delete Smurf
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

