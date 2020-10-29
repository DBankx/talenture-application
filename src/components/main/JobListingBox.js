import React from 'react';
import removeTags from '../common/removeTags';
import { Link } from 'react-router-dom';

const JobListingBox = ({ job }) => {
  var date = new Date(job.created_at);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  return (
    <div className='job-box'>
      <Link
        to={`/job/${job.id}`}
        style={{ textDecoration: 'none', color: '#000' }}
      >
        <small style={{ color: '#777777' }}>{job.type}</small>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <span style={{ color: '#777777' }}>
          {removeTags(job.description.slice(0, 200) + '...')}
        </span>
        <div>
          <small>{date.toLocaleDateString('en-US', options)}</small>
          <span style={{ margin: '0 1em' }}>•</span>
          <small>view Job</small>
        </div>
      </Link>
    </div>
  );
};

export default JobListingBox;
