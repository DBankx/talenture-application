import React from 'react';
import { connect } from 'react-redux';

const TextInput = ({
  error,
  value,
  placeholder,
  handleChange,
  name,
  setError,
  className
}) => {
  return (
    <div>
      <input
        className={className}
        type='text'
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={() => {
          if (value.length === 0) {
            setError((prevState) => ({
              ...prevState,
              [name]: true
            }));
          } else {
            setError((prevState) => ({
              ...prevState,
              [name]: false
            }));
          }
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default connect()(TextInput);
