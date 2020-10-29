import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextInput from '../common/TextInput';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // managing state for the forms
  const [values, setFormValues] = useState({
    description: '',
    location: ''
  });

  let history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  // managing error state
  const [error, setError] = useState({
    description: false,
    location: false
  });

  return (
    <div className='home-box'>
      <h1 style={{ textAlign: 'center' }}>Welcome to Talenture Job Finder</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/search/${values.description}/${values.location}`);
        }}
      >
        <div className='home-form'>
          <div className='input-box'>
            <h3 className='explain'>
              <i className='fas fa-briefcase' /> What
            </h3>
            <small className='small-text'>Job title, keywords</small>
            <TextInput
              name='description'
              handleChange={handleChange}
              error={error}
              value={values.description}
              setError={setError}
              placeholder='Job title, keywords or company'
              className={
                error.description
                  ? 'job-input-home error-input'
                  : 'job-input-home'
              }
            />
            {error.description && (
              <small className='error-text'>Job description is required</small>
            )}
          </div>
          <div className='input-box'>
            <h3 className='explain'>
              <i className='fas fa-search-location' /> Where
            </h3>
            <small className='small-text'>City, province</small>
            <TextInput
              placeholder='City or province'
              name='location'
              value={values.location}
              handleChange={handleChange}
              setError={setError}
              className={
                error.location ? 'job-input-home error-input' : 'job-input-home'
              }
            />
            {error.location && (
              <small className='error-text'>Job location is required</small>
            )}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            className='submit-button'
            disabled={
              values.description.length === 0 || values.location.length === 0
            }
            type='submit'
          >
            Search Jobs
          </button>
          <span style={{ display: 'block', margin: '1em 0' }}>OR</span>
          <Link className='link-button' to='/search'>
            View All Jobs
          </Link>
        </div>
      </form>
    </div>
  );
};

export default connect(null)(HomePage);
