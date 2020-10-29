import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='middle'>
      <p>
        The route you are looking for does not exist. Please go back to the home
        page
      </p>
      <Link to='/' style={{ margin: '1em 0' }}>
        <i className='fas fa-home' /> Go home
      </Link>
    </div>
  );
};

export default NotFound;
