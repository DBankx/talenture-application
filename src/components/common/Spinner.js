import React from 'react';
import loader from './spinner.gif';

const Spinner = () => {
  return (
    <div className='middle'>
      <img alt='loader' src={loader} style={{ width: '40px' }} />
    </div>
  );
};

export default Spinner;
