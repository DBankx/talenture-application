import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1em'
        }}
      >
        <small>&copy;copyright 2020 talenture</small>
        <small>Made with ❤ by dami</small>
      </div>
    </div>
  );
};

export default Footer;
