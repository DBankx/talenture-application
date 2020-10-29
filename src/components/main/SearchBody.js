import React from 'react';
import JobListingBox from './JobListingBox';
import { sortNewest, sortOldest } from '../../application/actions/job';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchBody = ({
  jobs,
  location,
  description,
  sortNewest,
  sortOldest,
  page
}) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <small style={{ color: '#777777' }}>
          {description && location
            ? `${description} jobs in ${location}`
            : `All jobs (page ${page} of 2)`}
        </small>
        <small>
          <Link to='/search'>View all jobs</Link>
        </small>
      </div>
      <div className={'top-info'}>
        <div className='dropdown'>
          <button className='dropbtn'>
            <i className='fas fa-filter' /> Sort by
          </button>
          <div className='dropdown-content'>
            <span onClick={() => sortOldest()}>Date (Oldest)</span>
            <span onClick={() => sortNewest()}>Date (Newest)</span>
          </div>
        </div>
        <div>
          <small>{jobs.length} Results found</small>
        </div>
      </div>

      <div>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id}>
              <JobListingBox job={job} />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default connect(null, { sortNewest, sortOldest })(SearchBody);
