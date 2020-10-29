import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import TextInput from '../common/TextInput';

const TopSearch = ({ locations, description }) => {
  // managing state for the forms
  const [values, setFormValues] = useState({
    description: description ? description : '',
    location: locations ? locations : ''
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        history.push(`/search/${values.description}/${values.location}`);
      }}
    >
      <div className='search-form'>
        <div className='input-box'>
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

        <div>
          <button
            className='submit-button'
            disabled={
              values.description.length === 0 || values.location.length === 0
            }
            type='submit'
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default withRouter(TopSearch);
